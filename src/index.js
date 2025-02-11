import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from './redux/store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    closeOnClick
                    draggable
                    pauseOnHover
                    theme="dark"

                />
              
               
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
