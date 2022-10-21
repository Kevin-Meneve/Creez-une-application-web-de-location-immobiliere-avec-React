import React from 'react';

function Dropdown({title, text}) {
    return (
        <article className='dropdown'>
            <h2 className='dropdown__title'>{title}</h2>
            <div className='dropdown__container'> 
                <p className='dropdown__container__text'>{text}</p>
            </div>    
        </article>
    );
}

export default Dropdown;