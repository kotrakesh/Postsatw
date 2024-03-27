// theme.ts
import { createTheme } from '@mui/material/styles'
import type {} from '@mui/x-data-grid/themeAugmentation'

const theme = createTheme({
    palette: {
        primary: {
            main: '#301254',
        },
        secondary: {
            main: '#BF360C',
        },
        success: {
            main: '#4caf50',
        },
    },
    typography: {
        fontSize: 16,
        h3: {
            fontWeight: 700,
            fontSize: '2.2rem',
        },
        h4: {
            fontWeight: 700,
            fontSize: '1.75rem',
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 1,
                    borderStyle: 'solid',
                    borderRadius: 10,
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                    color: '#C1C2C5',
                    padding: 10,
                },
            },
        },
    },
})

export default theme
