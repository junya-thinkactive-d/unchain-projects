import React from 'react';
import { Card } from './';

type CurrentAccount = string | undefined;
type Wave = {
  address: string;
  timestamp: Date;
  name: string;
  message: string;
  waveCount: number;
  winOrLose: boolean;
};
type Props = {
  currentAccount: CurrentAccount;
  allWaves: Wave[];
};

const Cards = ({ currentAccount, allWaves }: Props) => {
  return (
    <>
      {currentAccount && (
        <div className="max-w-4/5 grid lg:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center justify-self-center">
          {allWaves
            .slice(0)
            .reverse()
            .map((wave, index) => (
              <Card key={index} wave={wave} />
            ))}
        </div>
      )}
    </>
  );
};

export default Cards;
