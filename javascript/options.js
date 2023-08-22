import { html } from "https://esm.sh/htm/preact/standalone";
import OptGroup from "./opt-group.js";

export default function ({ selections, options, select }) {
  return html`
    <div
      class="fixed backdrop-blur-sm drop-shadow-lg bottom-0 left-0 overflow-y-auto bg-slate-900/50 z-40 max-h-[60%] w-full
    transition-all"
    >
      <div class="flex flex-row flex-wrap p-6 items-center">
        ${options.map(
          (option) =>
            html`<label class="text-slate-400 flex flex-col m-2">
              <span class="pl-2 font-bold text-xs uppercase"
                >${option.label}</span
              >
              <select
                class="w-32 focus:bg-slate-600 md:w-40 truncate rounded-lg bg-slate-800 text-slate-300 p-2 mt-1"
                value=${selections[option.key].key}
                name=${option.key}
                onChange=${select}
              >
                ${option.choices.map(
                  (group) => html`<${OptGroup} choiceGroup=${group} />`
                )}
              </select>
            </label>`
        )}
      </div>
    </div>
  `;
}
