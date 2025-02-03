import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.jsx'
import { store } from './app/store.js'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
     <React.Strictmode>
        <Provider store={store}>
            <App />
        </Provider>
     </React.Strictmode>
)