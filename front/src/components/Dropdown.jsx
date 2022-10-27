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
            <div>
            {isOpen ?
                <div ref={content} className='dropdown__textContainer dropdown__textContainer--open'>
                <div className='dropdown__textContainer__text' >{text}</div>
                </div>
            :
                <div ref={content} className='dropdown__textContainer--close dropdown__textContainer'>
                <div className='dropdown__textContainer__text' >{text}</div>
                </div>
            }   
            </div>
        </article>
    );
}

export default Dropdown;