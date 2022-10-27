import React from 'react';
import { useState, useRef } from 'react'
import VectorBottom from '../assets/VectorBottom.png'


function Dropdown({title, text}) {
    const [isOpen, setIsOpen] = useState(false);
    const content = useRef(null);

    const textSize = () => {
        const textLenght = content.current.scrollHeight;
        return textLenght;
    }

    return (
        <article className='dropdown'>
            <div className='dropdown__header' onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                <h2 className='dropdown__header__title'>{title}</h2>
                {isOpen ?
                    <img className='dropdown__header__icon--open dropdown__header__icon' src={VectorBottom} alt="Onglet ouvrable"/>
                :
                    <img className='dropdown__header__icon--close dropdown__header__icon' src={VectorBottom} alt="Onglet ouvrable"/>
                }
            </div>
            <div ref={content} className='dropdown__textContainer'>
            {isOpen ?
                <p className='dropdown__textContainer__text' style={{transform: `translateY(-${textSize()}px)`}}>{text}</p>
            :
                <p className='dropdown__textContainer__text'>{text}</p>
            }   
            </div>
        </article>
    );
}

export default Dropdown;