import * as jsdom from "jsdom";
const { JSDOM } = jsdom;

export default function getDolarHoyBlue() {
  const options = {
    referrer: process.env.DOLAR_HOY,
    includeNodeLocations: true,
    storageQuota: 10000000,
  };

  return JSDOM.fromURL(process.env.DOLAR_HOY, options).then((dom) => {
    // console.log(dom.serialize());

    const document = dom.window.document;
    const buy = document.querySelectorAll(".value")[0].textContent;
    const sale = document.querySelectorAll(".value")[1].textContent;
    const percentaje = null;
    let date = document.querySelector(".update").textContent;
    date = date.split(" ").slice(2).join(" ");
    console.log("try", buy, sale);
    return { buy, sale, percentaje, date };
  });
}
