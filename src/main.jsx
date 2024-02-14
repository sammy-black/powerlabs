import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from "./api/index.jsx";
import { Chart as ChartJS } from "chart.js/auto";
import 'chartjs-adapter-moment';



if (import.meta.env.MODE === 'development') {
  makeServer();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
