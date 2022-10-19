import React from 'react';

function Banner({link_image, text}) {
    return (
        <div>
            <section className='Banner_Home' style = {{backgroundImage:`url("../assets/${link_image}")`}}>
                <h1>{text}</h1>
            </section>
        </div>
    );
}

export default Banner;