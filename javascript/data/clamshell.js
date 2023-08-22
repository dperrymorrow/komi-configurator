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
    key: "back-top",
    label: "Back Top",
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
          absolute: false,
          src: "/images/clamshell/bg.svg",
        },
        {
          key: "edges",
          src: "/images/clamshell/dynamic/generated/edges-[key].svg",
        },
        {
          key: "hinge",
          src: "/images/clamshell/dynamic/generated/hinge-[key].svg",
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
          src: "/images/clamshell/dynamic/generated/cording-[key].svg",
        },
        { src: "/images/clamshell/overlay.svg" },
      ],
    },
    {
      key: "front",
      layers: [
        {
          src: "/images/clamshell/bg.svg",
        },
        {
          key: "edges",
          src: "/images/clamshell/dynamic/generated/edges-[key].svg",
        },
        {
          key: "hinge",
          src: "/images/clamshell/dynamic/generated/hinge-[key].svg",
        },
        {
          key: "front-secondary",
          src: "/images/clamshell/dynamic/generated/front-secondary-[key].svg",
        },
        {
          key: "front-main",
          src: "/images/clamshell/dynamic/generated/front-main-[key].svg",
        },
        { src: "/images/clamshell/overlay.svg" },
        {
          key: "cording",
          src: "/images/clamshell/dynamic/generated/cording-[key].svg",
        },
      ],
    },
  ],
};

export default clamshell;
