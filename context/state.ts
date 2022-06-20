import React, {useState, createContext, useContext} from "react";


export const NFTContext = createContext(null);

type Props = {
    children?: React.ReactNode;
}

export function AppWrapper ({children}:Props){



    return (
        <NFTContext
    )
}


