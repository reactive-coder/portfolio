import React from 'react';
import ReactDOM from 'react-dom';

// root style
import './index.css';
import App from "./app/app";
import { BrowserRouter as Router } from "react-router-dom";

// root app


ReactDOM.render(
    <Router>
         <App/>
    </Router>,
  document.getElementById('root')
);
