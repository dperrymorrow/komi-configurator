import choices from "./choices.js";

const { findByKey, cordura, velcro } = choices;

const options = [
  {
    label: "Edges",
    key: "edges",
    default: findByKey("cd-od"),
    choices: [cordura],
  },
  {
    key: "front-main",
    label: "Front Main",
    default: findByKey("cd-od"),
    choices: [cordura],
  },

  {
    key: "front-secondary",
    label: "Front Secondary",
    default: findByKey("cd-sunflower"),
    choices: [cordura],
  },

  {
    key: "hinge",
    label: "Hinge",
    default: findByKey("cd-od"),
    choices: [cordura],
  },

  {
    key: "cording",
    label: "Cording",
    default: findByKey("cd-sunflower"),
    choices: [cordura],
  },
  {
    key: "inner-lining",
    label: "Lining",
    default: findByKey("cd-fl-pink"),
    choices: [cordura],
  },

  {
    key: "inner-pockets",
    label: "pockets",
    default: findByKey("cd-fl-pink"),
    choices: [cordura],
  },

  {
    key: "back-secondary",
    label: "Back Secondary",
    default: findByKey("cd-fl-pink"),
    choices: [cordura],
  },

  {
    key: "back-main",
    label: "Back Main",
    default: findByKey("cd-od"),
    choices: [cordura, velcro],
  },
];

const clamshell = {
  label: "EDC Clamshell Pouch",
  key: "clamshell",
  options,
  etsyUrl: "https://www.etsy.com/listing/1489990809/customizable-edc-pouch",
  defaults: options.reduce((acc, option) => {
    return { ...acc, [option.key]: option.default };
  }, {}),

  views: [
    {
      key: "front",
      layers: [
        { src: "/images/clamshell/front-bg.svg" },
        { key: "edges" },
        { key: "hinge" },
        { key: "front-secondary" },
        { key: "front-main" },
        { key: "cording" },
        { src: "/images/clamshell/front-overlay.svg" },
      ],
    },
    {
      key: "back",
      layers: [
        { src: "/images/clamshell/back-bg.svg" },
        { key: "edges" },
        { key: "hinge" },
        { key: "back-secondary" },
        { key: "back-main" },
        { src: "/images/clamshell/back-overlay.svg" },
        { key: "cording" },
      ],
    },
  ],
};

export default clamshell;
