import Nav from './components/Nav'
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from './style/theme';


export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
    </ThemeProvider>
  );
}
