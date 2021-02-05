import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100vh;
    overflow: auto;
  }
  body {
    background: linear-gradient(-45deg, rgba(54,54,95,100) 0%, rgba(3,89,193,1) 100%);
    -webkit-font-smoothing: antialiased;
    color: #333;
    position: relative;
    &, input, button {
      font: 14px 'Ubuntu', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
  }
  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 20px;
  }
  button {
    cursor: pointer;
  }
`;
