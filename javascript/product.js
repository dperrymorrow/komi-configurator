import {
  html,
  useState,
  useEffect,
} from "https://esm.sh/htm/preact/standalone";

import Products from "../data/products.js";
import View from "./view.js";
import Options from "./options.js";
import Checkout from "./checkout.js";
import choices from "../data/choices.js";

export default function ({ productKey }) {
  const product = Products[productKey];

  let defaults = product.defaults;

  if (window.location.hash) {
    const urlParams = new URLSearchParams(
      window.location.hash.replace("#", "")
    );

    defaults = Array.from(urlParams.entries()).reduce((obj, [key, value]) => {
      obj[key] = choices.findByKey(value);
      return obj;
    }, {});
  }

  const [selections, setSelections] = useState(defaults);

  function makeSelection(ev) {
    const { name, value } = ev.target;
    const cloned = { ...selections };
    cloned[name] = choices.findByKey(value);
    setSelections(cloned);
  }

  useEffect(() => {
    const hashArr = Object.entries(selections).reduce((arr, [key, value]) => {
      arr.push(`${key}=${value.key}`);
      return arr;
    }, []);
    window.location.hash = hashArr.join("&");
  }, [selections]);

  return html`
    <div
      class="fixed top-0 left-0 w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
    >
      ${product.views.map(
        (view) => html`<${View} view=${view} selections=${selections} /> `
      )}
    </div>

    <div
      class="fixed backdrop-blur-sm drop-shadow-lg bottom-0 left-0 border-t-2 border-slate-700 overflow-y-auto bg-slate-900/50 z-40 max-h-[60%] w-full transition-all"
    >
      <${Options}
        selections=${selections}
        options=${product.options}
        select=${makeSelection}
      />
    </div>
    <img
      class="fixed top-4 left-4 opacity-75 md:w-20 w-14"
      src="/images/logo.svg"
    />
    <${Checkout} etsyUrl=${product.etsyUrl} />
  `;
}
