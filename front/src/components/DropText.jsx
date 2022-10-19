import React from 'react';

function DropText({title, text}) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    );
}

export default DropText;