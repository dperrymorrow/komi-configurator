import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ layer, choice }) {
  const path = choice ? layer.src.replace("[key]", choice.key) : layer.src;

  return html`
    <img
      class="${layer.absolute !== false
        ? "absolute top-0 left-0"
        : "normal"} md:m-20 md:mt-6 m-6 max-h-[100%]"
      src="${path}"
    />
  `;
}
