import axios from "axios";
import { JSDOM } from "JSDOM";

async function scrape() {
  const { data } = await axios.get("https://www.instagram.com/komicustoms/");
  const {
    window: { document },
  } = new JSDOM(data);

  const images = Array.from(document.querySelectorAll("img")).map((img) =>
    img.getAttribute("src")
  );

  console.log(images);

  // console.log(response);
}

scrape();
