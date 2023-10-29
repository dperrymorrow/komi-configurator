const images = [
  {
    src: "/images/clamshell/photos/P8082405.JPG",
    caption: "Smoke & Teal with velcro",
    tags: ["clamshell"],
  },
  {
    src: "/images/clamshell/photos/P8082405.JPG",
    caption: "Smoke & Teal with velcro",
    tags: ["clamshell"],
  },

  {
    src: "/images/clamshell/photos/P8082404.JPG",
    caption: "Smoke & Teal",
    tags: ["clamshell"],
  },
  {
    src: "/images/clamshell/photos/P8082403.JPG",
    caption: "Teal & Smoke with Floro Yellow Interior",
    tags: ["clamshell"],
  },

  {
    src: "/images/clamshell/photos/P8082407.JPG",
    caption: "Teal & Smoke",
    tags: ["clamshell"],
  },
];

export default {
  findImagesForTag(tag) {
    return images.filter(({ tags }) => tags.includes(tag));
  },
  images,
};
