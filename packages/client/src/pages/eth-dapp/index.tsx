import { useState, useCallback } from 'react';
import { useWallet, useWaveContract } from '@/hooks';
import { Cards } from '@/components/pages/Eth-dApp';

const EthDApp = () => {
  const [nameValue, setNameValue] = useState<string>('');
  const [messageValue, setMessageValue] = useState<string>('');
  const [waveCount, setWaveCount] = useState<number>(0);
  const [inputText, setInputText] = useState<boolean>(false);
  const { isRinkebyTestNetwork, currentAccount, connectWallet, checkIfWalletIsConnected } = useWallet();
  const { mining, totalWaves, allWaves, handleWave } = useWaveContract({
    enable: isRinkebyTestNetwork,
    name: nameValue,
    message: messageValue,
    waveCount: waveCount,
  });

  const handleIncCount = useCallback(() => {
    if (waveCount < 5) {
      setWaveCount(waveCount + 1);
    }
  }, [waveCount]);
  const handleDecCount = useCallback(() => {
    if (waveCount > 0) {
      setWaveCount(waveCount - 1);
    }
  }, [waveCount]);

  const handleInputText = useCallback(() => {
    setInputText(!inputText);
  }, [inputText]);

  return (
    <div className="container px-6 mx-auto">
      {mining && (
        <div className="w-screen h-screen absolute top-0 left-0 flex justify-center itmes-center bg-gray800 bg-opacity-30">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      )}
      <div className="px-6 mx-auto mb-20 min-h-screen flex flex-col justify-start items-center bg-blue-900 text-white">
        <div className="lg:text-4xl text-2xl my-4">
          <span role="img" aria-label="hand-wave">
            👋
          </span>{' '}
          WELLCOME{' '}
          <span role="img" aria-label="hand-wave">
            👋
          </span>
        </div>
        <div className="text-xl text-center sm:text-sm">
          イーサリアムウォレットを接続して、
          <span role="img" aria-label="hand-wave">
            👋
          </span>
          (wave) を送ってください
          <span role="img" aria-label="shine">
            ✨
          </span>
        </div>
        <div className="border border-b py-1 px-2 mt-2">TOTAL : {totalWaves} WAVES</div>

        {!currentAccount && (
          <button className="p-2 my-2 bg-red-300 rounded-md" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}

        {currentAccount && (
          <>
            <p className="p-2 rounded-md">Wallet Connected ♪</p>
            <button className="p-2 my-2 bg-gray-800 rounded-md " onClick={handleInputText}>
              Input Text
            </button>
            {inputText && (
              <div className="flex flex-col lg:w-4/6 w-full mb-8">
                <input
                  name="nameArea"
                  placeholder="DiscodeNameを入力"
                  id="name"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  className="text-gray-800 rounded-md p-2 mb-2"
                />
                <textarea
                  name="messageArea"
                  placeholder="メッセージはこちらから"
                  id="message"
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  className="text-gray-800 h-24 rounded-md p-2"
                />
                <div className="flex justify-center itmes-center">
                  <button onClick={handleDecCount} className="w-8 h-8 m-2 bg-gray-800">
                    -
                  </button>
                  <div className="w-8 h-8 m-2 text-gray-800 bg-white flex justify-center">{waveCount}</div>
                  <button onClick={handleIncCount} className="w-8 h-8 m-2 bg-gray-800">
                    +
                  </button>
                </div>
                <div className="text-center">{waveCount / 10000}Eth</div>
                <button className="p-2 my-2 bg-amber-300 rounded-md" onClick={handleWave}>
                  Wave at Me
                </button>
              </div>
            )}
          </>
        )}

        <Cards currentAccount={currentAccount} allWaves={allWaves} />
      </div>
    </div>
  );
};

export default EthDApp;
