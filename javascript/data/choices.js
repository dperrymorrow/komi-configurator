const groups = [
  {
    label: "Paracord",
    key: "paracord",
    choices: [
      {
        key: "pc-black",
        label: "Black",
        hex: "#202020",
        filter: "filter: brightness(0) saturate(100%) invert(6%) sepia(30%) saturate(9%) hue-rotate(330deg) brightness(103%) contrast(87%);",
        inStock: true,
      },
      {
        key: "pc-yellow",
        label: "Yellow",
        hex: "#f2e014",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(88%) sepia(40%) saturate(1772%) hue-rotate(352deg) brightness(106%) contrast(89%);",
        inStock: true,
      },
    ],
  },

  {
    label: "1000d Cordura",
    key: "cordura",
    choices: [
      {
        key: "cd-black",
        label: "Black",
        hex: "#202020",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(6%) sepia(30%) saturate(9%) hue-rotate(330deg) brightness(103%) contrast(87%);",
      },

      {
        key: "cd-smoke",
        label: "Smoke",
        hex: "#697873",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(50%) sepia(12%) saturate(290%) hue-rotate(109deg) brightness(89%) contrast(93%);",
      },

      {
        key: "cd-burgundy",
        label: "Burgundy",
        hex: "#692326",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(9%) sepia(38%) saturate(5393%) hue-rotate(342deg) brightness(105%) contrast(82%);",
      },

      {
        key: "cd-orange",
        label: "Classic Orange",
        hex: "#ed693f",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(47%) sepia(13%) saturate(7491%) hue-rotate(341deg) brightness(110%) contrast(86%);",
      },

      {
        key: "cd-fl-orange",
        label: "Floro Orange",
        hex: "#f54025",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(32%) sepia(91%) saturate(2564%) hue-rotate(347deg) brightness(97%) contrast(98%);",
      },

      {
        key: "cd-fl-pink",
        label: "Floresent Pink",
        hex: "#fa68b8",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(51%) sepia(77%) saturate(489%) hue-rotate(283deg) brightness(99%) contrast(98%);",
      },

      {
        key: "cd-teal",
        label: "Teal",
        hex: "#0d7f78",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(26%) sepia(61%) saturate(2604%) hue-rotate(157deg) brightness(97%) contrast(90%);",
      },

      {
        key: "cd-turqoise",
        label: "Turquoise",
        hex: "#54bcb7",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(73%) sepia(3%) saturate(5355%) hue-rotate(127deg) brightness(90%) contrast(96%);",
      },

      {
        key: "cd-floro-yellow",
        label: "Floro Yellow",
        hex: "#f2e014",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(88%) sepia(40%) saturate(1772%) hue-rotate(352deg) brightness(106%) contrast(89%);",
      },

      {
        key: "cd-sunflower",
        label: "Sunflower Yellow",
        hex: "#f3c04d",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(87%) sepia(87%) saturate(5851%) hue-rotate(318deg) brightness(99%) contrast(92%);",
      },

      {
        key: "cd-navy",
        hex: "#1e2c3e",
        label: "Navy",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(14%) sepia(5%) saturate(4911%) hue-rotate(175deg) brightness(91%) contrast(90%);",
      },

      {
        key: "cd-od",
        label: "Olive Drab",
        hex: "#516336",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(37%) sepia(22%) saturate(762%) hue-rotate(42deg) brightness(90%) contrast(92%);",
      },
      {
        key: "cd-tan",
        label: "Desert Tan",
        hex: "#bcaa82",
        inStock: true,
        filter: "filter: brightness(0) saturate(100%) invert(75%) sepia(7%) saturate(1447%) hue-rotate(4deg) brightness(91%) contrast(85%);",
      },
      {
        key: "cd-blue-camo",
        label: "Blue Camo",
        useImage: true,
        swatch: "images/swatches/blue-camo.jpg",
        inStock: true,
      },
      {
        key: "cd-multi-black",
        label: "Multicam Black",
        useImage: true,
        swatch: "images/swatches/multicam-black.jpg",
        inStock: true,
      },
    ],
  },
  {
    label: "Velcro Loop",
    key: "velcro",

    choices: [
      {
        key: "vc-black",
        label: "Black",
        inStock: true,
      },
    ],
  },
];

const choices = groups.map((group) => group.choices).flat();

export default {
  groups,
  choices,
  paracord: groups.find((group) => group.key === "paracord"),
  cordura: groups.find((group) => group.key === "cordura"),
  velcro: groups.find((group) => group.key === "velcro"),
  findByKey: (key) => choices.find((choice) => choice.key === key),
  findGroup: (choiceKey) => groups.find((group) => group.choices.find((choice) => choice.key === choiceKey)),
};
