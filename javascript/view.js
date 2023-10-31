import { html } from "https://esm.sh/htm/preact/standalone";
import Layer from "./layer.js";

export default function ({ view, selections }) {
  console.log(selections);
  return html`<div class="flex-shrink-0 w-full snap-center relative h-full">
    ${view.layers.map((layer) => html` <${Layer} layer=${layer} view=${view} choice=${selections[layer.key]} /> `)}
  </div>`;
}
