import { useWallet } from '@/hooks';
import { EthDAppContract } from '@/components/pages/Eth-dApp';

const EthDApp = () => {
  const { currentAccount, connectWallet } = useWallet();

  return (
    <div className="container px-6 mx-auto">
      <div className="px-6 mx-auto mb-20 min-h-screen flex flex-col justify-start items-center bg-blue-900 text-white">
        <h2 className="lg:text-4xl text-2xl my-4">
          <span role="img" aria-label="hand-wave">
            👋
          </span>{' '}
          TO MAKE THE WORLD BETTER!{' '}
          <span role="img" aria-label="hand-wave">
            👋
          </span>
        </h2>
        <h1 className="lg:text-xl text-center sm:text-sm">
          より良い世界を実現するためにあなたの
          <span role="img" aria-label="hand-wave">
            👋
          </span>
          (wave) を送ってください
          <span role="img" aria-label="shine">
            ✨
          </span>
        </h1>
        <div className="mt-1">1Wave = 0.00001ETH</div>
        <div className="mb-1">MAX 5Waves</div>
        <div className="my-1">5%の確立で「Wave × 0.0001ETH」がバックされます ( なんと10倍 ♪ )</div>
        <div className="my-1">集まったETHは、世界がより良くなるための事業に寄付されます</div>
        <div className="my-1">
          どの事業に寄付するかは投票によってきまります。送ってくれたWaveの数分あなたは投票することができる予定です
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
