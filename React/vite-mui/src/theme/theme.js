// src/theme.js
import { createTheme } from '@mui/material/styles';

const customFontFamily = {
    thin: 100,
    Medium: 500,
    large: 200
}
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976D2', // Your primary color
            secondary: "#5a8af2",


        },
        secondary: {
            main: '#DC004E', // Your secondary color
        },
        // You can also add dark mode settings or custom colors here
        // mode: 'dark', 
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        heading1: {
            fontSize: '10rem',
            fontWeight: customFontFamily.Medium,
        },
        heading2: {
            fontSize: '4rem',
            fontWidth: customFontFamily.large
        }
        // Define other typography variants (h2, body1, etc.)
    },
    shape: {
        borderRadius: 8, // Global border radius
    },
    area: {
        mainWidth: "100%",
        halfWidth: "50%"
    },
    components: {
        // You can override default props and styles for all MUI components
        MuiButton: {
            defaultProps: {
                disableRipple: true, // Disable ripple effect globally for all buttons
            },
            styleOverrides: {
                root: {
                    textTransform: 'none', // Use normal case text
                },
            },
        },
    },
});

export default theme;
