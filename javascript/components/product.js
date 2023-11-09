import { useState, html } from "https://esm.sh/htm/preact/standalone";

import choices from "../data/choices.js";
import State from "../data/state.js";
import Options from "./options.js";
import Slider from "./slider.js";
import products from "../data/products.js";

export default function () {
  const product = products.current;
  const { defaults, updateHash } = State(product);
  const [selections, setSelections] = useState(defaults);
  const [changedKey, setChangedKey] = useState(null);

  function makeSelection(ev) {
    const { name, value } = ev.target;
    const cloned = { ...selections };
    cloned[name] = choices.findByKey(value);
    setChangedKey(name);
    setSelections(cloned);
    updateHash(cloned);
  }

  // to update the url for the first time
  updateHash(selections);

  return html`
    <img class="fixed top-4 left-4 z-40 md:w-20 w-14" src="/images/logo.svg" />

    <div class="flex flex-col lg:flex-row border-red h-screen">
      <div class="flex flex-col flex-1 lg:w-2/3 w-full min-h-[380px]">
        <${Slider} selections=${selections} changedKey=${changedKey} />
      </div>

      <${Options} selections=${selections} select=${makeSelection} />
    </div>
  `;
}
