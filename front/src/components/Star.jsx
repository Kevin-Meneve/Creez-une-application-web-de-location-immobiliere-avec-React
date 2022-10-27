import React from "react";
import FullStar from "../assets/FullStar.png";
import EmptyStar from "../assets/EmptyStar.png"

const possibleRating = [1,2,3,4,5];

function Star(props) {
    return (
        <div className="starContainer">
            {
                possibleRating.map((index)=> (
                    index <= parseInt(props.note) ? 
                        <img className="starContainer__star" key={index} src={FullStar} alt="Etoile pleine"/> 
                    : 
                        <img className="starContainer__star" key={index} src={EmptyStar} alt="Etoile vide"/>
                ))
            }
        </div>
    )
}

export default Star