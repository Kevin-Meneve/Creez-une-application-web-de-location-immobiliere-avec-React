import React from "react";
import Dropdown from "./Dropdown";
import Star from "./Star"
import Tag from "./Tag"

function InfoHebergement(props) {
    const textEquipement = props.hebergement.equipments.map((equipement, i) =>
        <p className="equipement" key={i}>{equipement}</p> 
        )


    return (
        <section className="info">
            <div className="info__general">
                <div className="info__general__left">
                    <h2 className="info__general__left__title">{props.hebergement.title}</h2>
                    <p className="info__general__left__localisation">{props.hebergement.location}</p>
                    <Tag tags={props.hebergement.tags}/>
                </div>
                <div className="info__general__right">
                    <div className="info__general__right__profile">
                        <div className="info__general__right__profile__nameContainer">
                            <p className="info__general__right__profile__nameContainer__name">{props.hebergement.host.name.split(' ',1)}</p>
                            <p className="info__general__right__profile__nameContainer__name">{props.hebergement.host.name.split(' ').pop()}</p>
                        </div>
                        <img className="info__general__right__profile__picture" src={props.hebergement.host.picture} alt="Profil"/>
                    </div>
                    <Star note={props.hebergement.rating}/>
                </div>
            </div>
            <div className="info__dropdown">
                <div className="info__dropdown__element info__dropdown__element--left"><Dropdown title="Description" text={props.hebergement.description} /></div>
                <div className="info__dropdown__element"><Dropdown title="Équipement" text={textEquipement} /></div>
            </div>
        </section>
    )
}

export default InfoHebergement