import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { TicketProvider } from "./context/TicketContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import './App.css' 
import { CssBaseline, ThemeProvider, createTheme, Box } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
          <AuthProvider>
            <TicketProvider>
              <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                  <AppRoutes />
                </Box>
                <Footer />
              </Box>
            </TicketProvider>
          </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
