import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOM2 from 'react-dom';
import App from './App';
import './index.css';
<<<<<<< HEAD
import { BrowserRouter as Router, } from "react-router-dom";


=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> b4dfd67ae80e581d3500e350d50966f4f3287306
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from "react-auth-kit"

ReactDOM2.render(
  <React.StrictMode>
<<<<<<< HEAD

      <Router>
      <App />
      </Router>
=======
    <AuthProvider>
      <Router>
		<App />
	  </Router>
    </AuthProvider>
>>>>>>> b4dfd67ae80e581d3500e350d50966f4f3287306
  </React.StrictMode>,
  document.getElementById('root')
);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
