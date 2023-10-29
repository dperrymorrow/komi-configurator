const groups = [
  {
    label: "1000d Cordura",
    key: "cordura",
    src: (product, view, layer, choice) =>
      `/images/${product.key}/dynamic/generated/${view.key}-${layer.key}-${choice.key}.svg`,
    choices: [
      {
        key: "cd-black",
        label: "Black",
        hex: "#202020",
        inStock: true,
      },

      {
        key: "cd-smoke",
        label: "Smoke",
        hex: "#697873",
        inStock: true,
      },

      {
        key: "cd-burgundy",
        label: "Burgundy",
        hex: "#692326",
        inStock: true,
      },

      {
        key: "cd-orange",
        label: "Classic Orange",
        hex: "#ed693f",
        inStock: true,
      },

      {
        key: "cd-fl-orange",
        label: "Floro Orange",
        hex: "#f54025",
        inStock: true,
      },

      {
        key: "cd-fl-pink",
        label: "Floresent Pink",
        hex: "#fa68b8",
        inStock: true,
      },

      {
        key: "cd-teal",
        label: "Teal",
        hex: "#0d7f78",
        inStock: true,
      },

      {
        key: "cd-turqoise",
        label: "Turquoise",
        hex: "#54bcb7",
        inStock: true,
      },

      {
        key: "cd-floro-yellow",
        label: "Floro Yellow",
        hex: "#f2e014",
        inStock: true,
      },

      {
        key: "cd-sunflower",
        label: "Sunflower Yellow",
        hex: "#f3c04d",
        inStock: true,
      },

      {
        key: "cd-od",
        label: "Olive Drab",
        hex: "#516336",
        inStock: true,
      },
      {
        key: "cd-tan",
        label: "Desert Tan",
        hex: "#bcaa82",
        inStock: true,
      },
      {
        key: "cd-blue-camo",
        label: "Blue Camo",
        inStock: true,
        src: (product, view, layer, choice) =>
          `/images/${product.key}/${view.key}-${layer.key}-${choice.key}.svg`,
      },
    ],
  },
  {
    label: "Velcro Loop",
    key: "velcro",
    src: (product, view, layer, choice) => {
      return `/images/${product.key}/${view.key}-${layer.key}-${choice.key}.png`;
    },
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
  cordura: groups.find((group) => group.key === "cordura"),
  velcro: groups.find((group) => group.key === "velcro"),
  findByKey: (key) => choices.find((choice) => choice.key === key),
  findGroup: (choiceKey) =>
    groups.find((group) =>
      group.choices.find((choice) => choice.key === choiceKey)
    ),
};
