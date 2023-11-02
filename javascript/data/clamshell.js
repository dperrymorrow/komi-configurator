import choices from "./choices.js";

const { findByKey, cordura, velcro, paracord } = choices;

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
    default: findByKey("pc-yellow"),
    choices: [paracord],
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
      dir: "/images/products/clamshell/front-main/",
      hits: [],
      layers: [
        { key: "front-secondary", src: "front-secondary.png" },
        { key: "front-main", src: "front-main.png" },
        { key: "edges", src: "sides.png" },
        { key: "hinge", src: "hinge.png" },
        { key: "cording", src: "cording.png" },
        { src: "overlay.jpg" },
      ],
    },
    {
      key: "back-side",
      dir: "/images/products/clamshell/back-side/",
      hits: [],
      layers: [
        { key: "back-main", src: "back-main.png" },
        { key: "back-secondary", src: "back-secondary.png" },
        { key: "cording", src: "cording.png" },
        { key: "edges", src: "sides.png" },
        { src: "overlay.jpg" },
      ],
    },
    {
      key: "back-main",
      dir: "/images/products/clamshell/back-main/",
      hits: [{ key: "back-secondary", src: "hits/back-secondary.svg" }],
      layers: [
        { key: "hinge", src: "hinge.png" },
        { key: "back-secondary", src: "back-secondary.png" },
        { key: "back-main", src: "back-main.png" },
        { key: "edges", src: "sides.png" },
        { key: "cording", src: "cording.png" },
        { src: "overlay.jpg" },
      ],
    },
  ],
};

export default clamshell;
