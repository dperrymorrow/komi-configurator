import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ clicked, children }) {
  return html`<button
    onClick=${clicked}
    class="rounded-full leading-tight tracking-tightw-full flex justify-center items-center text-white font-bold p-4 uppercase bg-black hover:ring-4 ring-black ring-offset-2 transition-all"
  >
    ${children}
  </button>`;
}
