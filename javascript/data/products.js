import clamshell from "./clamshell.js";

let currentProduct = null;

export default {
  clamshell,

  get current() {
    return currentProduct;
  },

  set current(val) {
    currentProduct = val;
  },
};
