import getDolarSiData from "../services/dolarSi.js";
import * as util from "../utils/index.js";

export async function getAll(req, res) {
  const jsonData = await getDolarSiData();
  res.json(jsonData);
}
export async function getOficial(req, res) {
  const jsonData = await getDolarSiData();

  const output = {
    date: util.getLocalNowDate(),
    sale: jsonData.cotiza.Dolar.casa344.compra._text,
    buy: jsonData.cotiza.Dolar.casa344.venta._text,
  };
  res.json(output);
}
export async function getBlue(req, res) {
  const jsonData = await getDolarSiData();

  const output = {
    date: util.getLocalNowDate(),
    sale: jsonData.cotiza.Dolar.casa380.compra._text,
    buy: jsonData.cotiza.Dolar.casa380.venta._text,
  };
  res.json(output);
}
