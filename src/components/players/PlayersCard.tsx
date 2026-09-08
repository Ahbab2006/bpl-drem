import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/player';
import { FaUser, FaBaseballBall } from 'react-icons/fa';
import { toast } from 'react-toastify';



interface IPlayerCardProps {
    player: Iplayer
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[]
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}


const PlayersCard = ({ player,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers }:
    IPlayerCardProps) => {


    const [isSelected, setIsSelected] = useState(false)

    const handelSelectPlayer = () => {
        setIsSelected(true)
        const newCoinPric = coin - player.price
        if (newCoinPric >= 0) {
            setCoin(newCoinPric)
            toast.success(`${player.playerName} is purchase successfully`)
        } else {
            toast.error('Coin is not enough to purchase')
        }
        setSelectedPlayers([...selectedPlayers, player])

    }


    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Player Image */}
            <figure className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                    src={player.playerImage}
                    alt={player.playerName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Player Type Badge */}
                <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-content shadow-lg">
                        {player.playerType}
                    </span>
                </div>

                {/* Origin */}
                <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    {player.origin}
                </div>
            </figure>

            {/* Card Content */}
            <div className="card-body gap-4">

                {/* Player Name */}
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <FaUser />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">
                            {player.playerName}
                        </h2>
                        <p className="text-sm text-base-content/60">
                            Professional Cricketer
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider my-0"></div>

                {/* Playing Style */}
                <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-base-content/60">
                        Playing Style
                    </h3>

                    <div className="grid grid-cols-2 gap-3">

                        {/* Batting */}
                        <div className="rounded-xl bg-base-200 p-3">
                            <p className="mb-1 text-xs text-base-content/50">
                                Batting
                            </p>
                            <p className="font-semibold">
                                {player.battingStyle}
                            </p>
                        </div>

                        {/* Bowling */}
                        <div className="rounded-xl bg-base-200 p-3">
                            <p className="mb-1 text-xs text-base-content/50">
                                Bowling
                            </p>
                            <p className="font-semibold">
                                {player.bowlingStyle}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Price & Action */}
                <div className="mt-2 flex items-center justify-between border-t border-base-300 pt-4">

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                            Price
                        </p>

                        <p className="text-2xl font-extrabold text-primary">
                            ${player.price.toLocaleString()}
                        </p>
                    </div>

                    <button
                        onClick={() => handelSelectPlayer()} className={`btn btn-primary rounded-xl px-5 shadow-md transition-all hover:scale-105`}
                        disabled={isSelected === true ? true : false}>
                        <FaBaseballBall />

                        {isSelected === true ? 'Selected' : 'Choose'}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayersCard;
