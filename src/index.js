import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ReactSelectSingle from "./react-select-single";
import ReactSelectMulti from "./react-select-multi";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ReactSelectMulti />
  </StrictMode>
);
