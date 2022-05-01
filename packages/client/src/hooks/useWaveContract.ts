import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import WaveContractABI from '@/libs/hardhat/artifacts/contracts/WavePortal.sol/WavePortal.json';
import type { WavePortal as WaveType } from '@/libs/hardhat/types/WavePortal';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0x2F1940a6886a55E509b796791Fdfa87b555F5ca3';
const CONTRACT_ABI = WaveContractABI.abi;

type Props = {
  enable: boolean;
  message: string;
};
type AllWaves = {
  address: string;
  timestamp: Date;
  message: string;
}[];

type ReturnUseWaveContract = {
  mining: boolean;
  totalWaves: number;
  allWaves: AllWaves;
  handleWave: () => void;
};

export const useWaveContract = ({ enable, message }: Props): ReturnUseWaveContract => {
  const [totalWaves, setTotalWaves] = useState<number>(0);
  const [mining, setMining] = useState<boolean>(false);
  const [allWaves, setAllWaves] = useState<AllWaves>([]);
  const ethereum = getEthereumSafety();

  const waveContract: WaveType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as WaveType;
  }, [ethereum]);

  const handleGetContractBalance = useCallback(async () => {
    if (!waveContract) return;
    const contractBalance = await waveContract.provider.getBalance(waveContract.address);
    console.log('Contract balance', ethers.utils.formatEther(contractBalance));
  }, [waveContract]);

  const handleGetTotalWaves = useCallback(async () => {
    if (!waveContract) return;
    const count = await waveContract.getTotalWaves();
    setTotalWaves(count.toNumber());
  }, [waveContract]);

  const handleGetAllWaves = useCallback(async () => {
    if (!waveContract) return;
    const waves = await waveContract.getAllWaves();
    const waveCleaned = waves.map((wave) => {
      return {
        address: wave.waver,
        timestamp: new Date(wave.timestamp.toNumber() * 1000),
        message: wave.message,
      };
    });
    setAllWaves(waveCleaned);
  }, [waveContract]);

  const handleWave = useCallback(async () => {
    try {
      if (!waveContract) return;
      const waveTxn = await waveContract.wave(message);
      setMining(true);
      await waveTxn.wait();
      setMining(false);
      handleGetTotalWaves();
      handleGetAllWaves();
    } catch (error) {
      console.log(error);
    }
  }, [handleGetAllWaves, handleGetTotalWaves, message, waveContract]);

  useEffect(() => {
    if (!enable) return;
    handleGetContractBalance();
    handleGetTotalWaves();
    handleGetAllWaves();
  }, [enable, handleGetAllWaves, handleGetContractBalance, handleGetTotalWaves]);

  return {
    mining,
    totalWaves,
    allWaves,
    handleWave,
  };
};
