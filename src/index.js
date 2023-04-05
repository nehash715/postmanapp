import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import MainComponent from './component/mainComponent';
import PersonMain from './component/personmain';
import SportMain from './component/sportmain';
import BookMain from './component/bookmain';
import Task2Main from './component/task2main';
import Task3Main from './component/task3main';
import Task2 from './component/task2';
import CustomerMain from './component/customermain';
import CarMain from './component/carmain';
import EmpMain from './component/EmpMain';
import BankMain from './component/BankMain';
import StudentMain from './component/StudentMain';
import MainPassport from './component/MainPassport';
import Task5Main from './component/Task5Main';
import Axiosapp from './component/axiosapp';
import PostmanMain from './component/postmanMain';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PostmanMain/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
