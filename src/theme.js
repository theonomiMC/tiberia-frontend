import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['"Merriweather"',
            'serif',
            'Roboto',
            'Cinzel',
            'Playfair Display'
        ].join(','),
        h1: {
            fontSize: '1.7rem',
            fontWeight: 700,
            "@media (min-width:600px)": {
                fontSize: '2.2rem'
            }
        },

        h2: {
            fontSize: '1.7rem',
            fontWeight: 700,
            '@media (min-width:600px)': {
                fontSize: '2.2rem',

            },
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 700,
            '@media (min-width:600px)': {
                fontSize: '1.7rem',

            },
        },
        h4: {
            fontSize: '1.3rem',
            fontWeight: 700,
            '@media (min-width:600px)': {
                fontSize: '1.5rem',

            },
        },
        h5: {
            fontSize: '1.2rem',
            fontWeight: 700,
            '@media (min-width:600px)': {
                fontSize: '1.4rem',

            },
        },
        h6: {
            fontSize: '0.9rem',
            '@media (min-width:600px)': {
                fontSize: '1rem',

            },
        },

    },
})

export default theme;