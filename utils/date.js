export function getLocalNowDate() {
  const dateNow = new Date(Date.now());
  return `${dateNow.toLocaleDateString("es-AR")} ${dateNow.toLocaleTimeString(
    "es-AR"
  )}`;
}
