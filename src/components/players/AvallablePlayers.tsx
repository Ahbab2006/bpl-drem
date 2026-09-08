import React, { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/player';

import PlayersCard from './PlayersCard';

interface IAvailableProps {
    players: Iplayer[]
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers :Iplayer[]
    setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
}


const AvallablePlayers = ({ players, coin, setCoin,selectedPlayers,setSelectedPlayers }: IAvailableProps) => {
    console.log(players, 'players from available players')
    return (
        <div className='grid grid-cols-3 gap-4 mt-4'>
            {
                players.map((player: Iplayer, ind: number) => {
                    return <PlayersCard key={ind} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />

                })
            }
        </div>
    );
};

export default AvallablePlayers;