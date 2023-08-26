import { useState, html } from "https://esm.sh/htm/preact/standalone";

import choices from "./data/choices.js";

import State from "./data/state.js";
import Options from "./options.js";
import CheckoutModal from "./checkout-modal.js";
import Slider from "./slider.js";
import Button from "./button.js";
import products from "./data/products.js";

export default function () {
  const product = products.current;
  const { defaults, updateHash } = State(product);
  const [selections, setSelections] = useState(defaults);
  const [changedKey, setChangedKey] = useState(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const toggleCheckout = () => setCheckoutModalOpen(!checkoutModalOpen);
  const openInstagram = () =>
    window.open("https://www.instagram.com/komicustoms/", "_blank").focus();

  function makeSelection(ev) {
    const { name, value } = ev.target;
    const cloned = { ...selections };
    cloned[name] = choices.findByKey(value);
    setChangedKey(name);
    setSelections(cloned);
    updateHash(cloned);
  }

  return html`
    <div class="flex flex-col h-full">
      <div class="flex-grow min-h-[50%] relative">
        <${Slider} selections=${selections} changedKey=${changedKey} />

        <div
          class="flex px-6 absolute right-0 -bottom-6 z-40 items-center w-full md:w-auto"
        >
          <${Button} clicked=${openInstagram} class="py-2 mr-2 bg-slate-400/70">
            <span class="material-symbols-outlined mr-1"> lightbulb </span>
            Inspire
          <//>
          <${Button} clicked=${toggleCheckout} class="py-2 bg-green-800/70">
            <span class="material-symbols-outlined mr-1"> done </span>
            Done
          <//>
        </div>
      </div>

      <div class="flex-grow-1 overflow-y-auto relative drop-shadow-2xl">
        <${Options} selections=${selections} select=${makeSelection} />
      </div>

      <!-- all fixed stuff -->

      ${checkoutModalOpen
        ? html`<${CheckoutModal} close=${toggleCheckout} />`
        : null}

      <img
        class="fixed top-4 left-4 opacity-75 md:w-20 w-14"
        src="/images/logo.svg"
      />
    </div>
  `;
}
