import React from "react";
import { createRoot } from "react-dom/client";
import ProductManager from "./ProductManager";

import "./styles.css"; 
const root = createRoot(document.getElementById("root"));
root.render(<ProductManager />);
