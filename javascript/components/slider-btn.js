import Button from "./button.js";
import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ numSlides, slideIndex, setSlideIndex, direction }) {
  function clicked() {
    const desired = direction === "previous" ? slideIndex - 1 : slideIndex + 1;
    setSlideIndex(desired);
  }

  if (direction === "next" && slideIndex + 1 === numSlides) return "";
  if (direction === "previous" && slideIndex === 0) return "";

  return html`<${Button}
    class="ring-slate-500 hidden md:inline isolate sticky ${direction === "previous" ? "left-2" : "right-2"} bg-slate-300 z-30 lg:text-slate-500 px-4"
    clicked=${clicked}
  >
    <span class="material-symbols-outlined">${direction === "next" ? "arrow_forward" : "arrow_back"}</span>
  <//> `;
}
