import fs from "fs";
import { cordura } from "../data/choices.js";

const dest = "./images/clamshell/dynamic/generated/";
const dir = "./images/clamshell/dynamic/src/";

fs.readdirSync(dir).forEach((file) => {
  const content = fs.readFileSync(`${dir}${file}`, "utf8");

  cordura.forEach(({ key, hex }) => {
    const replaced = content.replaceAll("#0b636b", hex);

    const fileName = file.replace(".svg", `-${key}.svg`);
    const filePath = `${dest}${fileName}`;

    fs.writeFileSync(filePath, replaced);
  });
});
