import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <main>
            <section className='error'>
                <p className="error__404">404</p>
                <p className='error__text'>Oups! La page que vous demandez n'existe pas.</p>
                <p className='error__link'><Link className='error__link__composant' to="/">Retourner sur la page d’accueil</Link></p>
            </section>
        </main>
    )
}
 
export default Error