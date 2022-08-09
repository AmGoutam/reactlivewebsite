import React from "react";
import  ReactDOM  from "react-dom";
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

ReactDOM.render(

<BrowserRouter>
<App/>
</BrowserRouter>

,document.getElementById('root'));



