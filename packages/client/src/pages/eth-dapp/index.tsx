import { useWallet } from '@/hooks';
import { EthDAppContract } from '@/components/pages/Eth-dApp';

const EthDApp = () => {
  const { currentAccount, connectWallet } = useWallet();

  return (
    <div className="container px-6 mx-auto">
      <div className="px-6 mx-auto mb-20 min-h-screen flex flex-col justify-start items-center bg-blue-900 text-white">
        <h2 className="lg:text-4xl text-2xl my-4">
          <span role="img" aria-label="hand-wave">
            ๐
          </span>{' '}
          TO MAKE THE WORLD BETTER!{' '}
          <span role="img" aria-label="hand-wave">
            ๐
          </span>
        </h2>
        <h1 className="lg:text-xl text-center sm:text-sm">
          ใใ่ฏใไธ็ใๅฎ็พใใใใใซใใชใใฎ
          <span role="img" aria-label="hand-wave">
            ๐
          </span>
          (wave) ใ้ใฃใฆใใ ใใ
          <span role="img" aria-label="shine">
            โจ
          </span>
        </h1>
        <div className="mt-1">1Wave = 0.00001ETH</div>
        <div className="mb-1">MAX 5Waves</div>
        <div className="my-1">5%ใฎ็ขบ็ซใงใWave ร 0.0001ETHใใใใใฏใใใพใ ( ใชใใจ10ๅ โช )</div>
        <div className="my-1">้ใพใฃใETHใฏใไธ็ใใใ่ฏใใชใใใใฎไบๆฅญใซๅฏไปใใใพใ</div>
        <div className="my-1">
          ใฉใฎไบๆฅญใซๅฏไปใใใใฏๆ็ฅจใซใใฃใฆใใพใใพใใ้ใฃใฆใใใWaveใฎๆฐๅใใชใใฏๆ็ฅจใใใใจใใงใใไบๅฎใงใ
        </div>

        {!currentAccount ? (
          <button className="p-2 my-2 bg-red-300 rounded-md" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <EthDAppContract />
        )}
      </div>
    </div>
  );
};

export default EthDApp;
