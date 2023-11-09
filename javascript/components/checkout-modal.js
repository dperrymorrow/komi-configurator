import { html, useState } from "https://esm.sh/htm/preact/standalone";
import Button from "./button.js";
import ModalWrapper from "./modal-wrapper.js";

export default function ({ close, etsyUrl, isOpen }) {
  const url = window.location.href + window.location.hash;
  const [copyText, setCopyText] = useState("Copy");

  function checkout() {
    window.open(etsyUrl, "_blank");
  }

  function copy(ev) {
    setCopyText("Copied!");
    if (ev.target.select) ev.target.select();
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      setCopyText("copy");
    }, 2000);
  }

  if (!isOpen) return "";

  return html`<${ModalWrapper} close=${close}>
    <header class="border-b border-slate-400 pb-4">
      <h3 class="heading-font leading-tight text-4xl font-bold tracking-tight text-slate-700 mb-2">Order your custom design.</h3>
      <p class="font-light text-2xl">Your design can be shared anywhere, including on your Etsy order.</p>
    </header>

    <ul class="list-disc my-6 ml-6">
      <li>Copy the URL below.</li>
      <li>Paste into the <em>"personalization field"</em> on Etsy</li>
    </ul>

    <p>That's it! I will be able to see your design, and make your bag to match.</p>

    <div class="flex items-center my-6">
      <input onClick="${copy}" class="flex-grow border border-slate-400 rounded-l-full p-4" type="text" value="${url}" />
      <button onClick=${copy} class="rounded-r-full border border-slate-700 uppercase flex-grow-0 text-sm text-white text-center font-bold bg-black px-6 py-4">
        ${copyText}
      </button>
    </div>

    <div class="flex flex-col md:flex-row justify-between md:border-t border-slate-400 md:pt-6">
      <${Button} clicked=${close} class="mr-2 flex-grow bg-slate-600 mb-2 md:mb-0"> <span class="material-symbols-outlined mr-2"> close </span> Close <//>

      <${Button} clicked=${checkout} class="flex-grow bg-green-800 ring-green-800">
        <span class="material-symbols-outlined mr-2"> shopping_cart_checkout </span>
        Checkout / Etsy
      <//>
    </div>
  <//>`;
}
