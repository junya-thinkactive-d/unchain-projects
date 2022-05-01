import { useWallet, useWaveContract } from '@/hooks';
import { useState, useCallback } from 'react';

const EthDApp = () => {
  const [nameValue, setNameValue] = useState<string>('');
  const [messageValue, setMessageValue] = useState<string>('');
  const [inputText, setInputText] = useState<boolean>(false);
  const { isRinkebyTestNetwork, currentAccount, connectWallet, checkIfWalletIsConnected } = useWallet();
  const { mining, totalWaves, allWaves, handleWave } = useWaveContract({
    enable: isRinkebyTestNetwork,
    name: nameValue,
    message: messageValue,
  });

  const handleInputText = useCallback(() => {
    setInputText(!inputText);
  }, [inputText]);
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-blue-900 text-white">
      <div className="text-4xl my-4">
        <span role="img" aria-label="hand-wave">
          👋
        </span>{' '}
        WELLCOME{' '}
        <span role="img" aria-label="hand-wave">
          👋
        </span>
      </div>
      <div className="text-xl">
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
            <>
              <input
                name="nameArea"
                placeholder="DiscodeNameを入力"
                id="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                className="text-gray-800 w-3/5 rounded-md p-2 mb-2"
              />
              <textarea
                name="messageArea"
                placeholder="メッセージはこちらから"
                id="message"
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                className="text-gray-800 w-3/5 h-24 rounded-md p-2"
              />
              <button className="p-2 my-2 bg-amber-300 rounded-md" onClick={handleWave}>
                Wave at Me
              </button>
            </>
          )}
        </>
      )}

      {currentAccount &&
        allWaves
          .slice(0)
          .reverse()
          .map((wave, index) => {
            return (
              <div key={index}>
                <div>Adress: {wave.address}</div>
                <div>Time: {wave.timestamp.toString()}</div>
                <div>Name: {wave.name}</div>
                <div>Message: {wave.message}</div>
              </div>
            );
          })}
    </div>
  );
};

export default EthDApp;
