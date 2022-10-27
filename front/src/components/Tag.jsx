import React from "react";

function Tag(props) {
    return (
        <div className="tagContainer">
            {props.tags.map((tag, i) => <div  key={i} className="tagContainer__tag"> {tag} </div>)}
        </div>
    )
}

export default Tag