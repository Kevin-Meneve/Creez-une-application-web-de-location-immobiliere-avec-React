import React from 'react';

function Banner({link_image, text}) {
    return (
        <section className='banner'>
            <img className='banner__image' src={link_image} alt='bannière Kasa'/>
            <h1 className='banner__text'>{text}</h1>
        </section>      
    );
}

export default Banner;