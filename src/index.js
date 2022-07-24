import { createRoot } from "react-dom/client";

import { App } from "./containers/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
