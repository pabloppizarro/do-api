export { getLocalNowDate } from "./date.js";

export function formatARSCurrency(value) {
  const num = Number(value);
  return num.toLocaleString("es-AR");
}
