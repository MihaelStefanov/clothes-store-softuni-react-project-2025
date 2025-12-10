import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from './App.jsx'

// import './firebase.js'  ← ИЗТРИЙ ИЛИ КОМЕНТИРАЙ ТОЗИ РЕД

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)