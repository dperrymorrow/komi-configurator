import { html } from "https://esm.sh/htm/preact/standalone";

export default function ({ choiceGroup }) {
  const options = html`${choiceGroup.choices.map((choice) => {
    return html`<option value="${choice.key}">${choice.label}</option>`;
  })}`;

  return html`<optgroup label=${choiceGroup.label}>${options}</optgroup>`;
}
