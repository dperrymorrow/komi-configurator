import { html, render } from "https://esm.sh/htm/preact/standalone";
import Product from "./product.js";
import products from "./data/products.js";

// Initialize htm with Preact

export default function (productKey) {
  const product = products[productKey];
  render(
    html`<${Product} product="${product}" />`,
    document.getElementById("app")
  );
}
