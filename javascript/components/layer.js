import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ view, layer, choice }) {
  const imgPath = view.dir + layer.src.replace("{choice}", choice?.key);

  return html`<div class="absolute top-0 left-0 h-full w-full flex justify-center">
    <img class="object-contain" src=${imgPath} loading="lazy" />
  </div>`;
}
