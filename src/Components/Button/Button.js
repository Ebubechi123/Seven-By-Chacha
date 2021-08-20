import React from 'react';
import  "./Button.css";
const Button = ({
    children,
    style,
    className,
    onClick
}) => {
    return ( 
        <>
        <button style={style} onClick={onClick} className={className}>{children}</button>
        </>
     );
}
 
export default Button;