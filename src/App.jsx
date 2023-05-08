import { useState, useEffect, createContext, useContext } from "react";
import Nav from './components/Nav';
import Header from './components/Header';
import UserBlock from './components/UserBlock';
import FinancialBlock from './components/FinancialBlock';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from './style/theme';
import { Container } from './style/global';
import { GlobalState } from './store/globalState/context';



export const useGlobalState = () => useContext(GlobalStateContext);

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
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/clients", requestOptions)
      .then((response) => response.json())
      .then((result) => setDatas(result))
      .catch((error) => console.log("error", error));
      setIsLoading(false)

  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalState.Provider value={datas}>
        <GlobalStyle />
        <Nav />
        <Container>
          {
            datas.length !== 0 && (
              <>
                <Header />
                <UserBlock />
                <FinancialBlock />
              </>
            )
          }
        </Container>
      </GlobalState.Provider>
    </ThemeProvider>
  );
}
