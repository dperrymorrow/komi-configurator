import { useState, html, useEffect, useLayoutEffect } from "https://esm.sh/htm/preact/standalone";
import View from "./view.js";
import Button from "./button.js";
import products from "./data/products.js";

export default function ({ selections, changedKey }) {
  const views = products.current.views;
  const [slideIndex, setSlideIndex] = useState(0);

  const next = () => setSlideIndex(slideIndex + 1);
  const previous = () => setSlideIndex(slideIndex - 1);

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
    const slides = document.getElementById("sliderContainer").children;
    slides[slideIndex].scrollIntoView();
  }, [slideIndex]);

  return html`
    <div id="sliderContainer" class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar h-full w-full items-center relative">
      ${views.map((view) => html`<${View} view=${view} selections=${selections} /> `)}
    </div>
    <!-- the slider container -->
    <!--
      ${slideIndex > 0
      ? html`<${Button}
          clicked=${previous}
          class="absolute top-1/2 bg-white/20 text-black hover:bg-white/80 left-6 -mt-6 transition-all md:inline hidden w-32 px-4"
        >
          <span class="material-symbols-outlined">chevron_left</span>
        <//>`
      : null}
      ${slideIndex < views.length - 1
      ? html`<${Button}
          clicked=${next}
          class="absolute top-1/2 right-6 -mt-6 bg-white/25 hover:bg-white/80 text-black transition-all md:inline hidden w-32 px-4"
        >
          is this the button?
          <span class="material-symbols-outlined">chevron_right</span>
        <//>`
      : null}
    -->
  `;
}
