import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";

const root = createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
