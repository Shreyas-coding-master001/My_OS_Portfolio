import { createContext, useContext, useState } from "react";

export const windowsContext = createContext();

export function WindowsProvider({ children }) {
    const [windowsState, setWindowsState] = useState({
        github: false,
        notes : false,
        resume: false,
        spotify: false,
        linkedlin: false,
        cli: false
    })
    
    const [width, setwidth] = useState("55vw");
    const [height, setheight] = useState("70vh");

    return (
        <windowsContext.Provider value={{ windowsState, setWindowsState, width, setwidth , height, setheight}}>
            {children}
        </windowsContext.Provider>
    );
}

export function useWindowsContext() {
    return useContext(windowsContext);
}