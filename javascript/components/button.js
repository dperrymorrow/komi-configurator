import { html } from "https://esm.sh/htm/preact/standalone";

export default function (props) {
  const { children, clicked } = props;

  return html`<button
    onClick=${clicked}
    class="rounded-full drop-shadow-md w-full leading-tight tracking-tight flex justify-center items-center text-white font-bold py-4 px-6 uppercase bg-black hover:ring-4 ring-black ring-offset-2 transition-all ${props.class}"
  >
    ${children}
  </button>`;
}
