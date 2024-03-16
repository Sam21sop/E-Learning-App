import { createContext, useContext, useState, useEffect, Children } from "react";


// create theme context 
const ThemeContext = createContext();


// create custom proveider for theme 
const ThemeProvider = (props) => {

    // extract property
    const {children} = props;

    // define intial/default theme
    const defaultTheme = () => {
        localStorage.getItem('CODINNG_SAMURAI_THEME');
    };

    // define rewuired state
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        localStorage.setItem('CODING_NINJAS_PROJECT_THEME', theme);

        if (theme === 'dark-theme') {
            document.documentElement.classList.remove('light-theme');
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
            document.documentElement.classList.add('light-theme');
        }
    }, [theme]);

    // theme handler
    const toggleTheme = () => {
        setTheme((theme) => {
            if (theme === 'light-theme') {
                return 'dark-theme';
            };
            if (theme === 'dark-theme') {
                return 'light-theme';
            };
            return 'dark-theme';
        });
    };

    // return cutome theme provider
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}