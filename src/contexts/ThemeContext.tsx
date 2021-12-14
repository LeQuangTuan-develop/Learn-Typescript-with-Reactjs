import { PropTypes } from '@material-ui/core'
import { createContext, ReactNode, useState } from 'react'

const ThemeContextDefault = {
    theme: 'primary' as PropTypes.Color,
    toggleTheme: () => {},
}

interface ThemeContextProps {
    children: ReactNode
}

interface ThemeContextDefaultData {
    theme: PropTypes.Color
    toggleTheme: (theme: PropTypes.Color) => void
}

export const ThemeContext = createContext<ThemeContextDefaultData>(ThemeContextDefault)

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    const [theme, setTheme] = useState<PropTypes.Color>(ThemeContextDefault.theme)

    const toggleTheme = (theme: PropTypes.Color) => setTheme(theme)

    const themeContextDynamicData = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={themeContextDynamicData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
