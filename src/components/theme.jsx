import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
    success: {
      main: '#4caf50', // Custom success color
    },
    error: {
      main: '#f44336', // Custom error color
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      color: '#1976d2',
    },
  },
});

export default theme;
