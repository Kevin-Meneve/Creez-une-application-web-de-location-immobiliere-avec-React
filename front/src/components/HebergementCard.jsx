import React from 'react';
import { Link } from 'react-router-dom'

function HebergementCard(props) {
    return (
            <Link className="card" to={"/hebergement/"+props.hebergement.id} style={{backgroundImage:`url(${props.hebergement.pictures[0]})`}}>
                <h3 className="card__title">{props.hebergement.title}</h3>
            </Link>
    );
}

export default HebergementCard;