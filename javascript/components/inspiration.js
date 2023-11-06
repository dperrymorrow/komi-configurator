import inspiration from "../data/inspiration.js";
import ModalWrapper from "./modal-wrapper.js";
import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ close, tag }) {
  const images = inspiration.findImagesForTag(tag);

  return html`<${ModalWrapper} close=${close}> hello there... <//>`;
}
