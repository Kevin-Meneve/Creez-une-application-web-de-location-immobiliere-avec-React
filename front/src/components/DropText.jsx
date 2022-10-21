import React from 'react';

function DropText({title, text}) {
    return (
        <article>
            <h2>{title}</h2>
            <div> 
                <p>{text}</p>
            </div>    
        </article>
    );
}

export default DropText;