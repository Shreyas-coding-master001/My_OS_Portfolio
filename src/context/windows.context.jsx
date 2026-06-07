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

    return (
        <windowsContext.Provider value={{ windowsState, setWindowsState }}>
            {children}
        </windowsContext.Provider>
    );
}

export function useWindowsContext() {
    return useContext(windowsContext);
}