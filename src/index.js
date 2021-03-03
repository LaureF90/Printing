import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
/*ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);*/

ReactDOM.render(
   <BrowserRouter>
       <App />
   </BrowserRouter>,
   document.getElementById('root')
);
