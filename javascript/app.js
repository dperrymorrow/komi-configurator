import { html, render } from "https://esm.sh/htm/preact/standalone";
import Product from "./product.js";
import Products from "../data/products.js";

// Initialize htm with Preact

export default function (productKey) {
  render(
    html`<${Product} productKey="${productKey}" />`,
    document.getElementById("app")
  );
}
