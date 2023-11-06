import { html, render } from "https://esm.sh/htm/preact/standalone";
import Product from "./components/product.js";
import products from "./data/products.js";

// Initialize htm with Preact

export default function (productKey) {
  const product = products[productKey];
  products.current = product;
  render(html`<${Product} />`, document.getElementById("app"));
}
