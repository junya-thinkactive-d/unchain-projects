import React from 'react';
import dayjs from 'dayjs';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

type Wave = {
  address: string;
  timestamp: Date;
  name: string;
  message: string;
};
type Props = {
  wave: Wave;
};

const Cards = ({ wave }: Props) => {
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

        <div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{wave.message}</p>
        </div>

        <div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200 text-xs">{wave.address}</div>

          <div className="flex items-center justify-center mt-4">
            <span role="img" aria-label="hand-wave">
              👋
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
