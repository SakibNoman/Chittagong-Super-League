import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import Cart from '../Cart/Cart';
import PlayerCard from '../PlayerCard/PlayerCard';

const Players = () => {
    const [players, setPlayers] = useState([])
    const [recruited, setRecruited] = useState([])

    useEffect(() => {
        setPlayers(fakeData);
    }, [])

    const handlePlayer = (player) => {
        if (recruited.indexOf(player) === -1) {
            const newPlayer = [...recruited, player];
            setRecruited(newPlayer);
        }
    }

    return (
        <div className="row" style={{ marginRight: "0px" }}  >
            <div className="col-md-8 col-12 " >
                {
                    players.map(each => {
                        return <PlayerCard player={each} key={each.id} handlePlayer={handlePlayer} ></PlayerCard>
                    })
                }
            </div>
            <div className="col-md-4 col-12 " >
                <Cart recruited={recruited} ></Cart>
            </div>
        </div >
    );
};

export default Players;