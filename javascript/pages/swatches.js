import { html, render } from "https://esm.sh/htm/preact/standalone";
import Swatches from "../components/swatches.js";

export default function () {
  render(html`<${Swatches} />`, document.getElementById("app"));
}
