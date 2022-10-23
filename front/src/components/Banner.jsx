import React from 'react';

function Banner({link_image, text, pageName}) {
    return (
        <section className='banner' id={pageName}>
            <img className='banner__image image' src={link_image} alt='bannière Kasa'/>
            <h1 className='banner__text'>{text}</h1>
        </section>      
    );
}

export default Banner;