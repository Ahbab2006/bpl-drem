import React, { use, useState, type Dispatch, type SetStateAction, } from 'react';
import type { Iplayer } from '../../types/player';
import AvallablePlayers from './AvallablePlayers'
import SelectedPlayers from './SelectedPlayers';

interface playersProps {
    playersPromise: Promise<Iplayer>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: playersProps) => {
    console.log(playersPromise)
    const players = use(playersPromise);
    console.log(players, 'players')

    const [buttonType, setButtonType] = useState<'available' | 'selected'>('available')

    const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([])


    console.log(buttonType)

    const handelUpdateBtnType = (type: 'available' | 'selected') => {
        setButtonType(type);
    }

    return (
        <div className='container mx-auto'>

            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>{buttonType === 'available' ? "Available Players" : "Selected Players"}</h2>

                <div>
                    <button onClick={() => handelUpdateBtnType('available')} className={`btn ${buttonType === 'available' ? 'btn-success' : ""} rounded-r-none`}>Available</button>
                    <button onClick={() => handelUpdateBtnType('selected')} className={`btn ${buttonType === 'selected' ? 'btn-success' : ""} rounded-r-none`}>Selected</button>
                </div>
            </div>

            {buttonType === 'available' ? (
                <AvallablePlayers
                    players={players}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                />
            ) : (
                <SelectedPlayers
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    coin={coin}
                    setCoin={setCoin}
                    />
            )}
        </div>
    );
};

export default Players;