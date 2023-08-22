import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ layer, choice }) {
  const path = choice ? layer.src.replace("[key]", choice.key) : layer.src;

  return html`
    <div
      class="absolute top-0 left-0 w-full h-full bg-contain md:bg-center bg-no-repeat"
      style="background-image:url('${path}')"
    ></div>
  `;
}
