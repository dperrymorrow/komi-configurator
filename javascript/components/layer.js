import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ view, layer, choice }) {
  const imgPath = view.dir + layer.src;
  const isOverlay = !layer.key;

  return html`<div class="absolute top-0 left-0 h-full w-full flex justify-center">
    <img class="${isOverlay && "mix-blend-multiply"} object-contain" src=${imgPath} style=${choice?.filter} loading="lazy" />
  </div>`;
}
