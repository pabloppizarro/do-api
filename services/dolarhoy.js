import * as jsdom from "jsdom";
import { remove$ } from "../utils/index.js";
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
    const title = document.querySelector(".title").textContent;
    const buy = document.querySelectorAll(".value")[0].textContent;
    const sell = document.querySelectorAll(".value")[1].textContent;
    const percentaje = null;
    let date = document.querySelector(".update").textContent;
    date = date.split(" ").slice(2).join(" ");
    return {
      house: "Dólar Hoy",
      title,
      buy: remove$(buy),
      sell: remove$(sell),
      percentaje,
      date,
    };
  });
}
