import React from "react";
import Dropdown from "./Dropdown";
import Star from "./Star"
import Tag from "./Tag"

function InfoHebergement(props) {
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
                    <Star note={props.hebergement}/>
                </div>
            </div>
            <div>
                <Dropdown title="Description" text={props.hebergement.description} />
                <Dropdown title="Équipement" text={props.hebergement.equipments} />
            </div>
        </section>
    )
}

export default InfoHebergement