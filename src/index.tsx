import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './Router'
import {CookiesProvider} from 'react-cookie'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY)
window.Kakao.isInitialized()
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <RouterProvider router={router} />
        </CookiesProvider>
    </React.StrictMode>,
)
