import { html, useState } from "https://esm.sh/htm/preact/standalone";
import Modal from "./modal.js";
import Button from "./button.js";

export default function ({ etsyUrl }) {
  const [modalOpen, setModalOpen] = useState(false);

  function checkout() {
    window.open(etsyUrl, "_blank").focus();
  }

  return html`<div class="fixed top-4 right-4">
      <${Button} clicked=${() => setModalOpen(true)}>
        <span class="material-symbols-outlined mr-1"> done </span> Done
      <//>
    </div>

    ${modalOpen
      ? html`<${Modal}
          checkout=${checkout}
          cancel=${() => setModalOpen(false)}
        />`
      : ""} `;
}
