// Carrito compartido — Jose Store
const KEY = "jose-store-carrito";
export const WHATSAPP = "573003838830";

export function leer() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
}
function guardar(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("jose-carrito"));
  return items;
}
export function agregar(item) {
  const items = leer();
  const i = items.findIndex(x => x.id === item.id && x.talla === item.talla);
  if (i >= 0) items[i].cantidad += item.cantidad;
  else items.push(item);
  return guardar(items);
}
export function cambiarCantidad(index, delta) {
  const items = leer();
  if (!items[index]) return items;
  items[index].cantidad = Math.max(1, items[index].cantidad + delta);
  return guardar(items);
}
export function quitar(index) {
  const items = leer();
  items.splice(index, 1);
  return guardar(items);
}
export function vaciar() { return guardar([]); }
export function totalUnidades() { return leer().reduce((s, x) => s + x.cantidad, 0); }

export function mensajeWhatsApp(items) {
  const lineas = items.map((x, n) => {
    const partes = [x.nombre];
    if (x.talla) partes.push("talla " + x.talla);
    partes.push("cantidad " + x.cantidad);
    partes.push(x.precio);
    return (n + 1) + ". " + partes.join(" · ");
  });
  const conPrecio = items.filter(x => /\d/.test(String(x.precio)));
  let cierre = "Todos los productos quedan por cotizar.";
  if (conPrecio.length) {
    const total = conPrecio.reduce((s, x) => {
      const v = parseInt(String(x.precio).replace(/[^0-9]/g, ""), 10) || 0;
      return s + v * x.cantidad;
    }, 0);
    cierre = "Total de los productos con precio: $" + total.toLocaleString("es-CO");
    if (conPrecio.length !== items.length) cierre += " (el resto queda por cotizar)";
  }
  return "Hola Jose Store, quiero hacer este pedido:\n\n" + lineas.join("\n") + "\n\n" + cierre;
}
export function enlaceWhatsApp(items, numero) {
  return "https://wa.me/" + (numero || WHATSAPP) + "?text=" + encodeURIComponent(mensajeWhatsApp(items));
}
