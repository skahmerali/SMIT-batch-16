import Signup from "./Containers/Signup"
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/theme"

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Signup theme={theme}/>
      </ThemeProvider>
    </>
  )
}

export default App
