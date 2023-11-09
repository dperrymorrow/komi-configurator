import { html } from "https://esm.sh/htm/preact/standalone";
import Layer from "./layer.js";

export default function (props) {
  const { view, selections } = props;

  return html`<div class="view flex-shrink-0 snap-center relative h-full bg-white isolate ${props.class}">
    ${view.layers.map((layer) => html` <${Layer} layer=${layer} view=${view} choice=${selections[layer.key]} /> `)}
  </div>`;
}
