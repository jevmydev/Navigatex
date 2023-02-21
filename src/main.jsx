import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";

import "./main.css";

import { UserProvider } from "./context/user";

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserProvider>
        <App />
    </UserProvider>
);
