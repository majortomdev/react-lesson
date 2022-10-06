import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { createRoot } from 'react-dom/client'


const reactContentRoot = document.getElementById("root")


// ReactDOM.render(<App />, reactContentRoot)
const root = ReactDOM.createRoot(reactContentRoot)
root.render(<App />)