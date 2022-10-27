//import React from 'react';
import {useState, useEffect} from 'react';
import HebergementCard from './HebergementCard'

function AllHebergement() {

    const [hebergement, setHebergement] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        setDataLoading(true)
        fetch(`${process.env.PUBLIC_URL}/data.json`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setHebergement(data)
            setDataLoading(false);
        })
    }, [])


    return (
        <section>
            {dataLoading ? 
                <div> LOADING ! </div>
            : 
                <article className='gridCard'>{hebergement.map((hebergement) => <HebergementCard  hebergement={hebergement} key={hebergement.id}/>)}</article>
            }
        </section>
    )
}

export default AllHebergement;