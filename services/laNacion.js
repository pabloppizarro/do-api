import * as jsdom from "jsdom";
import { getLocalNowDate, remove$ } from "../utils/index.js";
const { JSDOM } = jsdom;

export default function getLanacionValues(referrer) {
  const options = {
    referrer,
    includeNodeLocations: true,
    storageQuota: 10000000,
  };

  return JSDOM.fromURL(referrer, options).then((dom) => {
    // console.log(dom.serialize());
    const output = [];
    const document = dom.window.document;
    const nodes = document.querySelectorAll(".currency-data");

    nodes.forEach((node) => {
      node.querySelectorAll("strong");
      console.log(JSON.stringify(currenciesNodes));
      console.log("hola");
      //   let value = {
      //     title: node.querySelector("h2").innerText,
      //     date: getLocalNowDate(),
      //     buy: remove$(currencies[0]?.innerText),
      //     sell: remove$(currencies[1]?.innerText),
      //   };
      //   output.push(value);
    });
    return output;
  });
}
