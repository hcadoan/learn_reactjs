import { ThemeContext } from "./useContext"
import { useContext } from "react"

export default function Paragraph() {

    const theme = useContext(ThemeContext)

    return (
        <p className={theme}>
            Context Provides
        </p>
    )
}