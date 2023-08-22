import Choices from "./choices.js";

export default function (product) {
  let defaults = product.defaults;

  if (window.location.hash) {
    const urlParams = new URLSearchParams(
      window.location.hash.replace("#", "")
    );

    defaults = Array.from(urlParams.entries()).reduce((obj, [key, value]) => {
      obj[key] = Choices.findByKey(value);
      return obj;
    }, {});

    // need to check local storage
  }

  function updateHash(selections) {
    const hashArr = Object.entries(selections).reduce((arr, [key, value]) => {
      arr.push(`${key}=${value.key}`);
      return arr;
    }, []);
    window.location.hash = hashArr.join("&");
  }

  return {
    defaults,
    updateHash,
  };
}
