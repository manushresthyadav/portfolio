import { createContext, useRef } from "react";

export const MyContext = createContext();

export default function ContextProviderFunction({children}){

    const home = useRef(null);
    const about = useRef(null);
    const skills = useRef(null);
    const project = useRef(null);
    const contact = useRef(null);

    return (
        <MyContext.Provider value={{home,about,skills,project,contact}}>{children}</MyContext.Provider>
    )
}