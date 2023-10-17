export { getLocalNowDate } from "./date.js";

export function formatARSCurrency(value) {
  const num = Number(value);
  return num.toLocaleString("es-AR");
}

export function remove$(str) {
  str = str.trim();
  if (str.startsWith("$")) {
    str = str.substring(1);
  }
  return str;
}
