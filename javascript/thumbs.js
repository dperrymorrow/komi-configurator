import { html } from "https://esm.sh/htm/preact/standalone";
import View from "./view.js";
import products from "./data/products.js";

export default function ({ selections, changedKey }) {
  const views = products.current.views;

  return html`<div
    id="thumbsContainer"
    class="flex flex-shrink-0 bg-slate-300 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar w-full items-start relative"
  >
    ${views.map((view) => html`<${View} class="w-40 h-40 mx-1 my-2" view=${view} selections=${selections} /> `)}
  </div>`;
}
