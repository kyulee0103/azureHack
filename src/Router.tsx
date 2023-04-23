import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Main from './Pages/Main'
import NotFound from './Pages/NotFound'
import Chat from './Pages/Chat'
import Login from './Pages/Login/Login'
import KaKaoLogin from './Pages/Login/KaKaoLogin'
import SignUp from './Pages/Login/SignUp'
import Hello from './Pages/Hello'

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
                path: '/login',
                element: <Login />,
            },
            {
                path: '/kakaoLogin',
                element: <KaKaoLogin />,
            },
            {path: '/signup', element: <SignUp />},
            {
                path: '/chat',
                element: <Chat />,
            },
        ],
        errorElement: <NotFound />,
    },
])

export default router
