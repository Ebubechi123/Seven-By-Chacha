
import React,{createContext,useState} from 'react';

export const BackgroundProvider = createContext();


export const Background=(props)=>{
    const [color, changeColor] = useState("#282c34");
    return(
            <BackgroundProvider.Provider value={[color,changeColor]}>
                {props.children}
            </BackgroundProvider.Provider>
    )
}
