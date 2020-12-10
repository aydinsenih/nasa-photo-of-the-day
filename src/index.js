import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    body{
        background-color:#4f5b66;
    }
`;

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>, document.getElementById("root")

);
