import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Main from './Pages/Main'
import NotFound from './Pages/NotFound'
import Chat from './Pages/Chat'
import KaKaoLogin from './Pages/Login/KaKaoLogin'
import Hello from './Pages/Hello'
import Again from './Pages/Again'
import Register from './Pages/Login/Register'
import Result from './Pages/Result'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <Hello />},
            {
                path: '/main',
                element: <Main />,
            },
            {
                path: 'home',
                element: <Again />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: '/kakaoLogin',
                element: <KaKaoLogin />,
            },
            {
                path: '/chat',
                element: <Chat />,
            },
            {
                path: '/result',
                element: <Result />,
            },
        ],
        errorElement: <NotFound />,
    },
])

export default router
