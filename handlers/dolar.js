import getDolarSiData from "../services/dolarSi.js";
import getCronistaBlue from "../services/cronista.js";
import getDolarHoyBlue from "../services/dolarhoy.js";
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

export async function getBlueCronista(req, res) {
  const data = await getCronistaBlue();
  res.json(data);
}
export async function getBlueDolarHoy(req, res) {
  const data = await getDolarHoyBlue(process.env.DOLAR_HOY_BLUE);
  res.json(data);
}
export async function getOficialDolarHoy(req, res) {
  const data = await getDolarHoyBlue(process.env.DOLAR_HOY_OFICIAL);
  res.json(data);
}
