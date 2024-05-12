import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
import './index.css'
import About from "./pages/About/About.jsx";
import Cards from "./pages/Cards/Cards.jsx";
import CardItem from "./pages/CardItem/CardItem.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "about",
                element: <About />,
            },
            {
                path: "cards",
                element: <Cards />,
            },
            {
                path: 'cards/:cardsId',
                element: <CardItem/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
