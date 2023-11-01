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
      let value = {
        house: "La Nación",
        title: node.querySelector("h2").textContent,
        date: getLocalNowDate(),
      };
      const currenciesNodes = node.querySelectorAll("strong");
      if (currenciesNodes.length > 1) {
        value.buy = remove$(currenciesNodes.item(0).textContent);
        value.sell = remove$(currenciesNodes.item(1).textContent);
      } else {
        value.sell = remove$(currenciesNodes.item(0).textContent);
      }
      output.push(value);
    });
    return output;
  });
}
