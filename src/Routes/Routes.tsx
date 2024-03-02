import { Outlet, createBrowserRouter } from 'react-router-dom';
import { NavBar } from '../Components/NavBar/NavBar';
import { Error404 } from '../Components/Error404/Error404';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <NavBar />
            <Outlet />
        </>,
        errorElement: <Error404 />,
        children: [
            {
                path: '/login',
                // element: <>
                //     <LoginMui />
                // </>
            }
        ]
    }
]);