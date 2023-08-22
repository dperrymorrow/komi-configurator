import { html, useState } from "https://esm.sh/htm/preact/standalone";

export default function ({ checkout, cancel }) {
  const url = window.location.href + window.location.hash;

  const [copyText, setCopyText] = useState("Copy");

  function copy(ev) {
    setCopyText("Copied!");
    if (ev.target.select) ev.target.select();
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      setCopyText("copy");
    }, 2000);
  }

  return html`<div
    class="fixed flex items-center justify-center z-40 backdrop-blur-md top-0 left-0 w-full h-full"
  >
    <div class="absolute top-0 left-0 w-full h-full" onClick=${cancel}></div>
    <div
      class="md:w-1/2 w-full m-4 bg-slate-300/80 max-h-full overflow-y-auto drop-shadow-lg md:px-16 md:py-12 p-6 rounded-xl"
    >
      <header class="border-b border-slate-400 pb-4">
        <h3
          class="heading-font text-4xl font-bold tracking-tight text-slate-700 mb-2"
        >
          Order your custom design.
        </h3>
        <p class="font-light text-2xl">
          Your design can be shared anywhere, including on your Etsy order.
        </p>
      </header>

      <ul class="list-disc my-6 ml-6">
        <li>Copy the URL below.</li>
        <li>Paste into the <em>"personalization field"</em> on Etsy</li>
      </ul>

      <p>
        That's it! I will be able to see your design, and make your bag to
        match.
      </p>

      <div class="flex items-center my-6">
        <input
          onClick="${copy}"
          class="flex-grow border border-slate-400 rounded-l-full p-4"
          type="text"
          value="${url}"
        />
        <button
          onClick=${copy}
          class="rounded-r-full border border-slate-700 uppercase flex-grow-0 text-sm text-white text-center font-bold bg-black px-6 py-4"
        >
          ${copyText}
        </button>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between md:border-t border-slate-400 md:pt-6"
      >
        <button
          onClick=${cancel}
          class="rounded-full mb-2 md:mb-0 leading-tight uppercase flex-grow text-sm text-white text-center font-bold bg-slate-600 px-6 py-4 hover:ring-4 ring-offset-2 ring-slate-800 transition-all"
        >
          I'm not done
        </button>

        <button
          class="rounded-full leading-tight uppercase text-sm flex-grow text-center bg-black text-white font-bold px-6 py-4 md:ml-2 ring-offset-2 hover:ring-4 ring-black transition-all"
          onClick=${checkout}
        >
          Checkout on Etsy
        </button>
      </div>
    </div>
  </div>`;
}
