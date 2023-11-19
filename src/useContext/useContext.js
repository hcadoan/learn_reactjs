//bỏ đi components trung gian

//vd: theme: Dark / Light
import { useState, createContext } from "react"
import Content from "./Content"
import '../App.css'

export const ThemeContext = createContext()

export default function UseContext() {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <button onClick={toggleTheme} >Toggle theme</button>
                <Content/>
            </ThemeContext.Provider>
        </div>
    )
}