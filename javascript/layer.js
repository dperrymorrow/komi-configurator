import choices from "./data/choices.js";
import products from "./data/products.js";
import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ view, layer, choice }) {
  let imgPath = layer.src;

  if (!imgPath && choice) {
    imgPath = choice.src ? choice.src : choices.findGroup(choice.key).src;
  }

  imgPath =
    imgPath instanceof Function
      ? imgPath(products.current, view, layer, choice)
      : imgPath;

  return html`
    <div
      class="absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat"
      style="background-image:url('${imgPath}')"
    ></div>
  `;
}
