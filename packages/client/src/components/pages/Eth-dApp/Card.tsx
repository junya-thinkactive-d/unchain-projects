import React from 'react';
import dayjs from 'dayjs';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

type Wave = {
  address: string;
  timestamp: Date;
  name: string;
  message: string;
  waveCount: number;
  winOrLose: boolean;
};
type Props = {
  wave: Wave;
};

const Card = ({ wave }: Props) => {
  let waveCounts = [];
  for (let i = 0; i < wave.waveCount; i++) {
    waveCounts.push(
      <span key={i} role="img" aria-label="hand-wave">
        👋
      </span>,
    );
  }

  return (
    <>
      <div className="col-span-1 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-800 dark:text-gray-400">
            <AccountBoxIcon className="mr-2" />
            {wave.name}
          </span>
          <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
            {dayjs(wave.timestamp.toString()).format('YYYY/M/D/h:m:s')}
          </span>
        </div>

        <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200 text-xs">{wave.address}</div>
        <div>
          <p className="mt-2 text-md text-gray-600 dark:text-gray-300">{wave.message}</p>
        </div>

        <div className="flex justify-between items-center text-gray-800 mt-4">
          <div>Sent Wave:{waveCounts}</div>
          <div>{wave.winOrLose ? <p>Lucky!{wave.waveCount / 1000}ETH</p> : <p>No refund</p>}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
