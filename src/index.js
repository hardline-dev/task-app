import { createRoot } from "react-dom/client";

import { App } from "./containers/App";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
