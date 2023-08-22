const groups = [
  {
    label: "1000d Cordura",
    key: "cordura",
    choices: [
      {
        key: "cd-black",
        label: "Black",
        hex: "#202020",
        inStock: true,
      },

      {
        key: "cd-pink",
        label: "Floresent Pink",
        hex: "#fa68b8",
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
    ],
  },
];

export default {
  groups,
  cordura: groups.find((group) => group.key === "cordura"),
  findByKey(key) {
    return groups
      .map((group) => group.choices)
      .flat()
      .find((choice) => choice.key === key);
  },
};
