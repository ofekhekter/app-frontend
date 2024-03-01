import { createBrowserRouter } from 'react-router-dom';
import { NavBar } from '../Components/NavBar/NavBar';
import { Login } from '../Components/LoginPage/Login';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <NavBar />
        </>,
        children: [
            {
                path: '/login',
                element: <>
                    <Login />
                </>
            }
        ]
    }
]);