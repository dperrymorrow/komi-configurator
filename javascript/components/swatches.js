import { html } from "https://esm.sh/htm/preact/standalone";
import Choices from "../data/choices.js";

export default function () {
  return html`<div class="flex flex-wrap p-6 items-start">
    ${Choices.cordura.choices.map(
      (choice) =>
        html`<div class="p-4 bg-white m-2 rounded-md">
          <div class="w-40 h-40 rounded-md" style="background-color:${choice.hex};">${choice.useImage && html`<img src=${choice.swatch} />`}</div>
          <label class="pt-3 block font-black bg-white">${choice.label}</label>
        </div> `
    )}
  </div>`;
}
