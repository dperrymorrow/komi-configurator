import { useState, html } from "https://esm.sh/htm/preact/standalone";

import choices from "../data/choices.js";

import State from "../data/state.js";
import Options from "./options.js";
import CheckoutModal from "./checkout-modal.js";
import Slider from "./slider.js";
import Button from "./button.js";
import Thumbs from "./thumbs.js";
import products from "../data/products.js";

export default function () {
  const product = products.current;
  const { defaults, updateHash } = State(product);
  const [selections, setSelections] = useState(defaults);
  const [changedKey, setChangedKey] = useState(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const toggleCheckout = () => setCheckoutModalOpen(!checkoutModalOpen);
  const openInstagram = () => window.open("https://www.instagram.com/komicustoms/", "_blank").focus();

  function makeSelection(ev) {
    const { name, value } = ev.target;
    const cloned = { ...selections };
    cloned[name] = choices.findByKey(value);
    setChangedKey(name);
    setSelections(cloned);
    updateHash(cloned);
  }

  return html`
    <!--
    <div class="flex px-6 items-center">
      <img class="md:w-20 w-14" src="/images/logo.svg" />
      <${Button} clicked=${openInstagram} class="py-2 mr-2 bg-slate-400/70">
        <span class="material-symbols-outlined mr-1"> lightbulb </span>
        Inspire
      <//>
      <${Button} clicked=${toggleCheckout} class="py-2 bg-green-800/70">
        <span class="material-symbols-outlined mr-1"> done </span>
        Done
      <//>
    </div>
    -->

    <div class="flex flex-col lg:flex-row border-red h-screen">
      <div class="flex flex-grow lg:w-2/3 w-full">
        <${Slider} selections=${selections} changedKey=${changedKey} />

        <!--<${Thumbs} selections=${selections} changedKey=${changedKey} />-->
      </div>

      <div class="flex-1">
        <${Options} selections=${selections} select=${makeSelection} />
      </div>

      <!-- all fixed stuff -->

      ${checkoutModalOpen && html`<${CheckoutModal} close=${toggleCheckout} etsyUrl=${product.etsyUrl} />`}
    </div>
  `;
}
