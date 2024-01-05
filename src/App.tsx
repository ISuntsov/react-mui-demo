import { ThemeProvider, colors, createTheme } from "@mui/material";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
// import { MuiTypography } from './components/MuiTypography';
// import { MuiButton } from './components/MuiButton';
// import { MuiTextField } from "./components/MuiTextField";
// import { MuiLayout } from "./components/MuiLayout";
// import { MuiBadge } from "./components/MuiBadge";
// import { MuiChip } from "./components/MuiChip";
// import { MuiTooltip } from "./components/MuiTooltip";

const theme = createTheme({
  status: {
      danger: "#e53e3e",
    },
  palette: {
    secondary: {
      light: colors.orange[200],
      main: colors.orange[500],
      dark: colors.orange[900],
    },
    neutral: {
      light: colors.grey[200],
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiLayout /> */}
        {/* <MuiBadge /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        <MuiResponsiveness />
      </ThemeProvider>
    </div>
  );
}

export default App;
