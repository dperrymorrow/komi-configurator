import { html, useState } from "https://esm.sh/htm/preact/standalone";
import Modal from "./modal.js";

export default function ({ etsyUrl }) {
  const [modalOpen, setModalOpen] = useState(false);

  function checkout() {
    window.open(etsyUrl, "_blank").focus();
  }

  return html`<button
      onClick=${() => setModalOpen(true)}
      class="fixed top-4 right-4 px-6 text-md py-3 uppercase transition-all font-bold rounded-full bg-black hover:ring-4 drop-shadow-lg ring-black  text-white ring-offset-2"
    >
      Finished
    </button>

    ${modalOpen
      ? html`<${Modal}
          checkout=${checkout}
          cancel=${() => setModalOpen(false)}
        />`
      : ""} `;
}
