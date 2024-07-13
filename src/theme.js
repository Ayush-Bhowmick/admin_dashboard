import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b9a', // Purple
    },
    secondary: {
      main: '#ab47bc', // Lighter purple
    },
    background: {
      default: '#f3e5f5', // Light purple background
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
