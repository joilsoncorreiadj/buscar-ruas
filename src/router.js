import {
    createBrowserRouter,
    Link,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import Place from "./place";

const NotFound = () => {
    return (
        <div className="flex flex-col flex-1 h-screen bg-fuchsia-600 items-center justify-center">
            <h2 className="text-white text-2xl font-semibold">Pagina não encotrada!</h2>
            <Link to={ "/" } className="text-white mt-4 rounded-md px-4 py-2 border border-white">Voltar Inicio</Link>
        </div>
    )
}

const routerNavigation = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/place/:id',
        element: <Place />
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default routerNavigation;