import {
  useState,
  html,
  useLayoutEffect,
} from "https://esm.sh/htm/preact/standalone";
import View from "./view.js";
import Button from "./button.js";

export default function ({ views, selections }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const next = () => setSlideIndex(slideIndex + 1);
  const previous = () => setSlideIndex(slideIndex - 1);

  useLayoutEffect(() => {
    const slide = document.getElementById("sliderContainer").children;
    slide[slideIndex].scrollIntoView();
  }, [slideIndex]);

  return html` <div
      id="sliderContainer"
      class="fixed top-0 left-0 w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
    >
      ${views.map(
        (view) => html`<${View} view=${view} selections=${selections} /> `
      )}
    </div>
    <!-- the slider container -->
    <div
      class="fixed top-1/2 left-6 -mt-6 opacity-70 hover:opacity-100 transition-all md:inline hidden"
    >
      ${slideIndex > 0
        ? html`<${Button} clicked=${previous}>
            <span class="material-symbols-outlined">chevron_left</span>
          <//>`
        : null}
    </div>
    <div
      class="fixed top-1/2 right-6 -mt-6 opacity-70 hover:opacity-100 transition-all md:inline hidden"
    >
      ${slideIndex < views.length - 1
        ? html`<${Button} clicked=${next}>
            <span class="material-symbols-outlined">chevron_right</span>
          <//>`
        : null}
    </div>`;
}
