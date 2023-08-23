import choices from "./choices.js";

const { findByKey, cordura } = choices;

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
    default: findByKey("cd-pink"),
    choices: [cordura],
  },

  {
    key: "inner-pockets",
    label: "pockets",
    default: findByKey("cd-pink"),
    choices: [cordura],
  },

  {
    key: "back-secondary",
    label: "Back Secondary",
    default: findByKey("cd-pink"),
    choices: [cordura],
  },

  {
    key: "back-main",
    label: "Back Main",
    default: findByKey("cd-od"),
    choices: [cordura],
  },
];

const clamshell = {
  label: "EDC Clamshell Pouch",
  tag: "clamshell",
  options,
  etsyUrl: "https://www.etsy.com/listing/1489990809/customizable-edc-pouch",
  defaults: options.reduce((acc, option) => {
    return { ...acc, [option.key]: option.default };
  }, {}),

  views: [
    {
      key: "front",
      layers: [
        {
          src: "/images/clamshell/front-bg.svg",
        },
        {
          key: "edges",
          src: "/images/clamshell/dynamic/generated/front-edges-[key].svg",
        },
        {
          key: "hinge",
          src: "/images/clamshell/dynamic/generated/front-hinge-[key].svg",
        },
        {
          key: "front-secondary",
          src: "/images/clamshell/dynamic/generated/front-secondary-[key].svg",
        },
        {
          key: "front-main",
          src: "/images/clamshell/dynamic/generated/front-main-[key].svg",
        },
        {
          key: "cording",
          src: "/images/clamshell/dynamic/generated/front-cording-[key].svg",
        },
        { src: "/images/clamshell/front-overlay.svg" },
      ],
    },
    {
      key: "back",
      layers: [
        {
          src: "/images/clamshell/back-bg.svg",
        },
        {
          key: "edges",
          src: "/images/clamshell/dynamic/generated/back-edges-[key].svg",
        },
        {
          key: "hinge",
          src: "/images/clamshell/dynamic/generated/back-hinge-[key].svg",
        },
        {
          key: "back-secondary",
          src: "/images/clamshell/dynamic/generated/back-secondary-[key].svg",
        },
        {
          key: "back-main",
          src: "/images/clamshell/dynamic/generated/back-main-[key].svg",
        },
        { src: "/images/clamshell/back-overlay.svg" },
        {
          key: "cording",
          src: "/images/clamshell/dynamic/generated/back-cording-[key].svg",
        },
      ],
    },
  ],
};

export default clamshell;
