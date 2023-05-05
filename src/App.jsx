import { useState, useEffect } from "react";
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
  const [datas, setDatas] = useState([]);

  const getData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:3030/clients", requestOptions)
    .then((response) => response.json())
    .then((result) => setDatas(result))
    .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
        {datas.map((data) => (
          <div key={data.id}>
            <h3>
              <span>{data.id}</span> {data.name}
            </h3>
            <p>{data.contact}</p>
          </div>
        ))}
    </ThemeProvider>
  );
}
