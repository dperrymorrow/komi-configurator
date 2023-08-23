import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ close, children }) {
  return html`<div
    class="fixed flex items-center justify-center z-40 backdrop-blur-md top-0 left-0 w-full h-full"
  >
    <div class="absolute top-0 left-0 w-full h-full" onClick=${close}></div>
    <div
      class="md:w-2/3 w-full m-4 bg-slate-300/80 max-h-full overflow-y-auto drop-shadow-lg md:px-16 md:py-12 p-6 rounded-xl"
    >
      ${children}
    </div>
  </div>`;
}
