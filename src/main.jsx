import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import {ToastContainer} from "react-toastify";
import { Provider } from "react-redux";
import {store} from "./app/store.js"



createRoot(document.getElementById("root")).render(
 <Provider store={store}>
  <AppRoutes />
    <ToastContainer position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        draggable
        theme="light"/>
 </Provider>
);