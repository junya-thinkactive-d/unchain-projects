import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import WaveContractABI from '@/libs/hardhat/artifacts/contracts/WavePortal.sol/WavePortal.json';
import type { WavePortal as WaveType } from '@/libs/hardhat/types/WavePortal';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0x97cd687C5c5a855BbD862d5d593fd671D244fe8D';
const CONTRACT_ABI = WaveContractABI.abi;

type Props = {
  enable: boolean;
  name: string;
  message: string;
  waveCount: number;
};
type AllWaves = {
  address: string;
  timestamp: Date;
  name: string;
  message: string;
  waveCount: number;
  winOrLose: boolean;
}[];

type ReturnUseWaveContract = {
  mining: boolean;
  totalWaves: number;
  allWaves: AllWaves;
  handleWave: () => void;
};

export const useWaveContract = ({ enable, name, message, waveCount }: Props): ReturnUseWaveContract => {
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
        name: wave.name,
        message: wave.message,
        waveCount: wave.wavecount.toNumber(),
        winOrLose: wave.winOrLose,
      };
    });
    setAllWaves(waveCleaned);
  }, [waveContract]);

  const handleWave = useCallback(async () => {
    try {
      if (!waveContract) return;
      const waveTxn = await waveContract.mintWave(name, message, waveCount, {
        value: ethers.utils.parseEther(`${waveCount / 10000}`),
      });
      setMining(true);
      await waveTxn.wait();
      setMining(false);
      handleGetTotalWaves();
      handleGetAllWaves();
    } catch (error) {
      console.log(error);
    }
  }, [handleGetAllWaves, handleGetTotalWaves, message, name, waveContract, waveCount]);

  useEffect(() => {
    if (!waveContract) return;
    handleGetContractBalance();
    handleGetTotalWaves();
    handleGetAllWaves();
  }, [enable, handleGetAllWaves, handleGetContractBalance, handleGetTotalWaves, waveContract]);

  return {
    mining,
    totalWaves,
    allWaves,
    handleWave,
  };
};
