import React from 'react';

type Props = {
  mining: boolean;
};

const Mining = ({ mining }: Props) => {
  return (
    <>
      {mining && (
        <div className="w-screen h-full fixed top-0 left-0 flex flex-col justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
          <div className="text-white text-2xl">now minting...</div>
        </div>
      )}
    </>
  );
};

export default Mining;
