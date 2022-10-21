import React from 'react';

function Banner({link_image, text}) {
    return (
        <section>
            <h1 className='banner__text'>{text}</h1>
            <div className='banner__image' style={{backgroundImage:`url(${link_image})`}}></div>
        </section>
        
    );
}

export default Banner;