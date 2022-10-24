import React from 'react';
import {useState} from 'react';
import VectorLeft from '../assets/VectorLeft.png'
import VectorRight from '../assets/VectorRight.png'


function Carroussel({pictures}) {
    const [slideId, setSlideId] = useState(0);
    const imgSize = () => {
        const slideshowImg = document.querySelector('.carroussel__container__img');
        if(!slideshowImg){
            return 0;
        }
        return slideshowImg.width;
    }

    const onNext = () => {
        if(slideId === pictures.length - 1){
            setSlideId(0)
        } else {
            setSlideId(slideId + 1)
        }
    }

    const onPrev = () => {
        if(slideId === 0){
            setSlideId(pictures.length - 1)
        } else {
            setSlideId(slideId - 1)
        }
    }
    
    return (
        
        <aside className="carroussel">
            <div className="carroussel__container" style={{transform: `translateX(-${slideId * imgSize()}px)`}}>
            {pictures.map((picture) => < img className='carroussel__container__img' src={picture} key={picture} alt="Hebergement"/>)}
            </div>
            <div className={'carroussel__controle'}>
                <img src={VectorLeft} className={'carroussel__controle__vector'} onClick={onPrev} alt="Indicateur suivant"/>
                <img src={VectorRight} className={'carroussel__controle__vector'} onClick={onNext} alt="Indicateur précédent"/>
            </div>
            <div className={'carroussel__number'}>{slideId + 1} / {pictures.length}</div>
        </aside>
        
    );
}

export default Carroussel;