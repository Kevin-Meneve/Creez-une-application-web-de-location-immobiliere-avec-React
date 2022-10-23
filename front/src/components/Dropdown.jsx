import React from 'react';
import { useState, useEffect } from 'react'



function Dropdown({title, text}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className='dropdown'>
            <div className='dropdown__header' onClick={() => isOpen === true ? setIsOpen(false) : setIsOpen(true)}>
                <h2 className='dropdown__header__title'>{title}</h2>
                <p className='dropdown__header__icon'></p>
            </div>
            <p className='dropdown__text'>{text}</p> 
        </article>
    );
}

export default Dropdown;