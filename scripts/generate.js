import fs from "fs";
import Choices from "../javascript/data/choices.js";

const dest = "./images/clamshell/dynamic/generated/";
const dir = "./images/clamshell/dynamic/src/";
const regex = /fill:#([a-f0-9]{6})/gm;

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest);

fs.readdirSync(dir).forEach((file) => {
  const content = fs.readFileSync(`${dir}${file}`, "utf8");

  Choices.cordura.choices.forEach(({ key, hex }) => {
    const replaced = content.replaceAll(regex, `fill:${hex}`);

    // console.log(hex);

    const fileName = file.replace(".svg", `-${key}.svg`);
    const filePath = `${dest}${fileName}`;

    fs.writeFileSync(filePath, replaced);
  });
});
