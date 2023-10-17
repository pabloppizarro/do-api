import * as jsdom from "jsdom";
import { remove$ } from "../utils.js";
const { JSDOM } = jsdom;

export default function getDolarHoyBlue(url) {
  const options = {
    referrer: url,
    includeNodeLocations: true,
    storageQuota: 10000000,
  };

  return JSDOM.fromURL(url, options).then((dom) => {
    // console.log(dom.serialize());

    const document = dom.window.document;
    const buy = document.querySelectorAll(".value")[0].textContent;
    const sale = document.querySelectorAll(".value")[1].textContent;
    const percentaje = null;
    let date = document.querySelector(".update").textContent;
    date = date.split(" ").slice(2).join(" ");
    return { buy: remove$(buy), sale: remove$(sale), percentaje, date };
  });
}
