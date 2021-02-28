import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import PlayerCard from '../PlayerCard/PlayerCard';

const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        setPlayers(fakeData);
    }, [])
    return (
        <div className="row" >
            <div className="col-md-8 col-12 " >
                {
                    players.map(each => {
                        return <PlayerCard player={each} key={each.id} ></PlayerCard>
                    })
                }
            </div>
            <div className="col-md-4 col-12 " >

            </div>
        </div>
    );
};

export default Players;