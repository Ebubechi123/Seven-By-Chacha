import React from 'react';
import "./Card.css"
const Card = (
    {
        style,
        className
    }
) => {
    return ( 
        <>
        <div style={style} className={className}>
            <h1>Hello World</h1>
        </div>
        </>
     );
}
 
export default Card;