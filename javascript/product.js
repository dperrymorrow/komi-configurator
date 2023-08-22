import { useState, html } from "https://esm.sh/htm/preact/standalone";

import choices from "./data/choices.js";

import View from "./view.js";
import State from "./data/state.js";
import Options from "./options.js";
import Checkout from "./checkout.js";
import Slider from "./slider.js";

export default function ({ product }) {
  const { defaults, updateHash } = State(product);
  const [selections, setSelections] = useState(defaults);

  function makeSelection(ev) {
    const { name, value } = ev.target;
    const cloned = { ...selections };
    cloned[name] = choices.findByKey(value);
    setSelections(cloned);
    updateHash(cloned);
  }

  return html`
    <${Slider} views=${product.views} selections=${selections} />

    <${Options}
      selections=${selections}
      options=${product.options}
      select=${makeSelection}
    />

    <img
      class="fixed top-4 left-4 opacity-75 md:w-20 w-14"
      src="/images/logo.svg"
    />
    <${Checkout} etsyUrl=${product.etsyUrl} />
  `;
}
