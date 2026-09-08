import React, { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../types/player';
import { TbTrash } from 'react-icons/tb';

interface ISelectedPlayersProps {
    player: Iplayer
     coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[]
        setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const SelectedPlayerCard = ({ player,coin,setCoin, selectedPlayers, setSelectedPlayers, }: ISelectedPlayersProps) => {

    const handleRemovePlayer = (player: Iplayer) => {
        const restPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)

        console.log(restPlayers, 'restPlayer')

        setSelectedPlayers(restPlayers)

        const newCoinPrice = coin + player.price;
        setCoin(newCoinPrice)
    }

    return (


        <div className='flex gap-2 justify-between items-center border-2 border-gray-300 rounded-2xl p-4'>
            <div className='flex gap-2'>
                <img src={player.playerImage} alt="" className='h-[60px] w-[50px]' />
                <div>
                    <h2 className='font-bold text-2xl'>{player.playerName}</h2>
                    <p>{player.playerType}</p>
                </div>
            </div>
            <span className='text-red-600 font-bold cursor-pointer' onClick={() => handleRemovePlayer(player)}>
                <TbTrash />
            </span>
        </div>
    );
};

export default SelectedPlayerCard;