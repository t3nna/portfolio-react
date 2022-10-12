import React, {createContext, useState} from "react";

export const ThemeContext = createContext({theme: 'light'})

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('light');
    function toggleTheme (){
        theme==='light'?setTheme('dark'): setTheme('light')
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}