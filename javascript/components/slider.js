import { useState, html, useEffect, useLayoutEffect } from "https://esm.sh/htm/preact/standalone";
import View from "./view.js";
import products from "../data/products.js";
import SliderBtn from "./slider-btn.js";

export default function ({ selections, changedKey }) {
  const views = products.current.views;
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!changedKey) return;
    const currentView = views[slideIndex];
    const layer = currentView.layers.find(({ key }) => key === changedKey);

    if (!layer) {
      const desiredIndex = views.findIndex(({ layers }) => layers.find(({ key }) => key === changedKey));
      setSlideIndex(desiredIndex);
    }
  }, [changedKey]);

  useLayoutEffect(() => {
    const slides = document.querySelectorAll("#sliderContainer .view");
    slides[slideIndex].scrollIntoView();
  }, [slideIndex]);

  return html`
    <div id="sliderContainer" class="isolate flex overflow-x-auto snap-x scroll-smooth snap-mandatory no-scrollbar h-full w-full items-center relative">
      <${SliderBtn} direction="previous" numSlides=${views.length} slideIndex=${slideIndex} setSlideIndex=${setSlideIndex} />
      <!-- the slides -->
      ${views.map((view) => html`<${View} class="view w-full" view=${view} selections=${selections} /> `)}
      <${SliderBtn} direction="next" numSlides=${views.length} slideIndex=${slideIndex} setSlideIndex=${setSlideIndex} />
    </div>
  `;
}
