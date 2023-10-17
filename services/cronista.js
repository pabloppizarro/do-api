import * as jsdom from "jsdom";
const { JSDOM } = jsdom;
export default function getCronistaBlue() {
  const options = {
    referrer: process.env.CRONISTA_BLUE,
    includeNodeLocations: true,
    storageQuota: 10000000,
  };

  return JSDOM.fromURL(process.env.CRONISTA_BLUE, options).then((dom) => {
    // console.log(dom.serialize());

    const document = dom.window.document;
    const buy = document.querySelector(".buy-value").textContent;
    const sale = document.querySelector(".sell-value").textContent;
    const percentaje =
      document.querySelectorAll(".percentage a span")[1].textContent;
    let date = document.querySelector(".date a").textContent;
    date = date.split(" ").slice(1).join(" ");
    console.log("try", buy, sale);
    return { buy, sale, percentaje, date };
  });
}
