import { html, useState } from "https://esm.sh/htm/preact/standalone";
import OptGroup from "./opt-group.js";
import products from "../data/products.js";
import Button from "./button.js";
import CheckoutModal from "./checkout-modal.js";

export default function ({ selections, select }) {
  const { options } = products.current;
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { etsyUrl } = products.current;

  const toggleCheckout = () => setCheckoutOpen(!checkoutOpen);

  return html`
    <div class="overflow-y-auto bg-slate-200 transition-all h-full pt-2">
      <div class="flex flex-col p-6">
        ${options.map(
          (option) =>
            html`<label class="text-slate-400 flex flex-col m-2">
              <span class="pl-2 font-bold text-xs uppercase">${option.label}</span>
              <select
                class="truncate rounded-lg bg-slate-300 text-slate-500 p-2 mt-1"
                value=${selections[option.key].key}
                name=${option.key}
                onFocus=${select}
                onChange=${select}
              >
                ${option.choices.map((group) => html`<${OptGroup} choiceGroup=${group} />`)}
              </select>
            </label>`
        )}
        <div class="p4 mt-6 sticky bottom-0">
          <${Button} clicked=${toggleCheckout} class="py-2 bg-green-800/70 ring-green-800">
            <span class="material-symbols-outlined mr-1"> done </span>
            Done
          <//>
        </div>
      </div>
    </div>

    <${CheckoutModal} isOpen=${checkoutOpen} close=${toggleCheckout} etsyUrl=${etsyUrl} />
  `;
}
