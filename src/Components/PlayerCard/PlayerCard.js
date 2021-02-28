import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerCard.css'

const PlayerCard = (props) => {
    const { name, salary, image } = props.player;
    return (
        <div className="main" >
            <div className="player-card row" >
                <div className="img-box col-md-3 col-6 " >
                    <img src={image} alt="..." />
                </div>
                <div className="info-box col-md-6 col-6 " >
                    <h5>{name}</h5>
                    <p><small>Salary: $ {salary}</small></p>
                </div>
                <div className="col-md-3 col-12 mt-5 mt-md-0">
                    <button className="btn btn-secondary text-white" onClick={(event) => {
                        event.target.innerText = "Hired"
                        event.target.style.cursor = "not-allowed"
                        props.handlePlayer(props.player)
                    }} > <FontAwesomeIcon icon={faPlus} />  Recruit </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;