// Catálogo compartido — Jose Store
export const TALLAS_ZAPATOS = ["38", "39", "40", "41", "42"];
const sizes = TALLAS_ZAPATOS;
const tallasRopa = ["S", "M", "L", "XL"];

export function slug(name) {
  return name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const relojesRaw = [
      { name: "Invicta Pro Diver — Oro Dorado", meta: "Movimiento quartz · correa de malla metálica en tono oro dorado · bisel estriado con ventana de fecha.", img: "assets/reloj-invicta-pro-diver-oro.webp" },
      { name: "Invicta Specialty — Bicolor Dorado", meta: "Movimiento quartz · esfera dorada · pulso de acero bicolor · resistente al agua 50M.", img: "assets/w-invicta-specialty-bicolor-oro.webp" },
      { name: "Invicta Pro Diver Chronograph — Negro y Oro", meta: "Cronógrafo quartz · esfera negra · correa de silicona negra con inserciones doradas.", img: "assets/w-invicta-pro-diver-chrono-negro-oro.webp" },
      { name: "Guess Rectangular — Dorado", meta: "Movimiento quartz · caja rectangular dorada · esfera negra con cristales · malla milanesa.", img: "assets/w-guess-rectangular-oro.webp" },
      { name: "TechnoMarine Chronograph — Blanco y Oro", meta: "Cronógrafo quartz · esfera champán · correa de silicona blanca · fechador.", img: "assets/w-technomarine-chrono-blanco-oro.webp" },
      { name: "Invicta Specialty — Bicolor Plateado", meta: "Movimiento quartz · esfera plateada · pulso de acero bicolor · resistente al agua 50M.", img: "assets/w-invicta-specialty-bicolor-plata.webp" },
      { name: "Invicta Specialty — Full Dorado", meta: "Movimiento quartz · esfera y pulso en tono oro dorado · bisel estriado · resistente al agua 50M.", img: "assets/w-invicta-specialty-full-oro.webp" },
      { name: "TechnoMarine Sky Blue — Acero", meta: "Movimiento quartz · esfera azul celeste texturizada · caja y pulso de acero · 100M/330FT.", img: "assets/w-technomarine-sky-blue-acero.webp" },
      { name: "TechnoMarine Manta — Full Dorado", meta: "Movimiento quartz · caja octagonal dorada · esfera champán texturizada · 100M/330FT.", img: "assets/w-technomarine-full-oro.webp" },
      { name: "TechnoMarine Manta — Verde Militar", meta: "Movimiento quartz · caja de acero · esfera verde militar texturizada · 100M/330FT.", img: "assets/w-technomarine-verde-acero.webp" },
      { name: "Invicta Pro Diver Chronograph — Silicona Negra", meta: "Cronógrafo quartz · bisel dorado · esfera negra con tres subdiales · correa de silicona negra con oro.", img: "assets/w-invicta-pro-diver-chrono-negro-oro-2.webp" },
      { name: "Invicta Pro Diver Automatic — Oro y Azul", meta: "Movimiento automático · esfera dorada · bisel azul · pulso dorado · 200M / 660ft.", img: "assets/w-invicta-pro-diver-auto-oro-azul.webp" },
      { name: "Invicta Pro Diver Automatic — Bicolor Azul", meta: "Movimiento automático · esfera y bisel azul · pulso de acero bicolor · 200M / 660ft.", img: "assets/w-invicta-pro-diver-auto-bicolor-azul.webp" },
      { name: "Invicta Pro Diver Automatic — Bicolor Negro", meta: "Movimiento automático · esfera negra · bisel dorado · pulso de acero bicolor · 200M / 660ft.", img: "assets/w-invicta-pro-diver-auto-bicolor-negro.webp" },
      { name: "TechnoMarine Chronograph — Full Dorado", meta: "Cronógrafo quartz · caja y pulso dorados · esfera champán con subdiales negros · fechador.", img: "assets/w-technomarine-chrono-full-oro.webp" },
      { name: "Invicta Pro Diver Chronograph — Bisel Azul y Rojo", meta: "Cronógrafo quartz · caja de acero · esfera negra · correa de malla metálica.", img: "assets/w-invicta-pro-diver-chrono-pepsi-malla.webp" },
      { name: "Invicta Pro Diver Chronograph — Bisel Verde y Malla Dorada", meta: "Cronógrafo quartz · caja dorada · esfera negra · bisel negro y verde · malla dorada.", img: "assets/w-invicta-prodiver-chrono-verde-malla-oro.webp" },
      { name: "Invicta Pro Diver — Negro y Verde, Malla Dorada", meta: "Movimiento quartz · esfera negra texturizada · bisel negro y verde · malla dorada · 100M.", img: "assets/w-invicta-prodiver-verde-negro-malla-oro.webp" },
      { name: "Invicta Bolt Chronograph — Negro y Oro", meta: "Cronógrafo quartz · caja dorada con cable · esfera negra · correa de silicona negra.", img: "assets/w-invicta-bolt-chrono-negro-oro.webp" },
      { name: "Invicta Specialty — Negro con Bisel Dorado", meta: "Movimiento quartz · esfera negra · bisel dorado · correa de silicona negra.", img: "assets/w-invicta-specialty-negro-silicona.webp" },
      { name: "Invicta Chronograph Taquímetro — Bicolor", meta: "Cronógrafo quartz · esfera negra con taquímetro · pulso de acero bicolor.", img: "assets/w-invicta-chrono-taquimetro-bicolor.webp" },
      { name: "Invicta Specialty — Acero Plateado", meta: "Movimiento quartz · esfera plateada · bisel estriado · pulso de acero · 100M.", img: "assets/w-invicta-specialty-acero-plata.webp" },
      { name: "Invicta Pro Diver Chronograph — Bicolor Negro", meta: "Cronógrafo quartz · esfera negra con tres subdiales · pulso de acero bicolor · 100M.", img: "assets/w-invicta-prodiver-chrono-bicolor-negro.webp" },
      { name: "Invicta Bolt Chronograph — Bicolor Champán", meta: "Cronógrafo quartz · caja con cable · esfera champán · pulso de acero bicolor · 100M.", img: "assets/w-invicta-bolt-chrono-bicolor-champan.webp" },
      { name: "Invicta Specialty — Azul con Bisel Dorado", meta: "Movimiento quartz · esfera azul · bisel dorado · correa de silicona azul.", img: "assets/w-invicta-specialty-azul-silicona.webp" },
      { name: "Invicta Chronograph Taquímetro — Oro Rosa", meta: "Cronógrafo quartz · esfera negra con taquímetro · pulso de acero y oro rosa.", img: "assets/w-invicta-chrono-taquimetro-oro-rosa.webp" },
      { name: "Guess Phoenix — Negro y Oro", meta: "Multifunción quartz · caja tonneau negra · detalles dorados · correa de silicona negra.", img: "assets/w-guess-phoenix-negro-oro.webp" },
      { name: "Guess Phoenix — Azul", meta: "Multifunción quartz · caja tonneau azul · subdiales dorados · correa de silicona azul.", img: "assets/w-guess-phoenix-azul.webp" },
      { name: "Guess Waterpro — Azul y Acero", meta: "Movimiento quartz · esfera azul · calendario día y fecha · pulso de acero.", img: "assets/w-guess-waterpro-azul-acero.webp" },
      { name: "Fossil Neutra Chronograph — Oro y Cuero", meta: "Cronógrafo quartz · caja dorada · esfera champán · correa de cuero café.", img: "assets/w-fossil-neutra-oro-cuero.webp" },
      { name: "Bulova Chronograph — Plata y Azul", meta: "Cronógrafo quartz · esfera plateada con índices azules · bisel estriado · pulso de acero.", img: "assets/w-bulova-chrono-plata-azul.webp" },
      { name: "Perry Ellis Sapphire — Rectangular Azul", meta: "Movimiento quartz · cristal de zafiro · caja rectangular de acero · esfera azul.", img: "assets/w-perry-ellis-rectangular-azul.webp" },
      { name: "Michael Kors — Azul y Cuero Café", meta: "Cronógrafo quartz · esfera azul con índices dorados · correa de cuero café.", img: "assets/w-michael-kors-azul-cuero.webp" },
      { name: "Fossil Carraway — Rectangular Acero", meta: "Movimiento quartz · caja rectangular de acero · esfera plateada con números romanos · pulso de acero.", img: "assets/w-fossil-carraway-acero.webp" },
      { name: "Fossil Carraway — Dorado y Cuero", meta: "Movimiento quartz · caja rectangular dorada · esfera plateada con números romanos · correa de cuero café.", img: "assets/w-fossil-carraway-oro-cuero.webp" },
      { name: "Guess Phoenix — Negro y Plata", meta: "Multifunción quartz · caja tonneau negra · subdiales esqueleto plateados · correa de silicona negra.", img: "assets/w-guess-phoenix-negro-plata.webp" },
      { name: "Guess Connoisseur — Verde y Bicolor", meta: "Movimiento quartz · esfera verde con números romanos · día y fecha · pulso de acero bicolor.", img: "assets/w-guess-connoisseur-verde-bicolor.webp" },
      { name: "Guess Connoisseur — Azul y Acero", meta: "Movimiento quartz · esfera azul con números romanos · día y fecha · pulso de acero.", img: "assets/w-guess-connoisseur-azul-acero.webp" }
];

const zapatosRaw = [
      { name: "Tenis running gris / neón", meta: "Suela perforada tipo cloud, malla degradada y detalles negros. Acabado waterproof.", price: "$160.000", variants: sizes, img: "assets/z-01-gris-neon.webp" },
      { name: "Tenis running blanco hueso", meta: "Tejido knit blanco con collar negro y suela perforada tipo cloud.", price: "$160.000", variants: sizes, img: "assets/z-02-blanco-hueso.webp" },
      { name: "Tenis running beige / coral", meta: "Malla beige con acentos coral y placa de suela alta. Modelo velocidad.", price: "$165.000", variants: sizes, img: "assets/z-03-beige-coral.webp" },
      { name: "Tenis running gris / azul", meta: "Degradado gris con detalles azul cielo y suela perforada tipo cloud.", price: "$170.000", variants: sizes, img: "assets/z-04-gris-azul.webp" },
      { name: "Tenis clásico negro total", meta: "Cuero negro completo, silueta baja clásica. Un básico para todos los días.", price: "$150.000", variants: sizes, img: "assets/z-05-negro-total.webp" },
      { name: "Tenis clásico blanco total", meta: "Cuero blanco completo, silueta baja clásica. Combina con todo.", price: "$170.000", variants: sizes, img: "assets/z-07-blanco-total.webp" },
      { name: "Tenis retro negro / plata", meta: "Estilo running retro en malla negra con paneles plateados.", price: "$160.000", variants: sizes, img: "assets/z-06-retro-negro-plata.webp" },
      { name: "Tenis retro hueso / plata", meta: "Estilo running retro en tonos hueso y gris con detalles plateados.", price: "$175.000", variants: sizes, img: "assets/z-08-retro-hueso-plata.webp" },
      { name: "Tenis clásico blanco / rojo", meta: "Silueta vintage en cuero blanco con franja roja y detalle azul.", price: "$170.000", variants: sizes, img: "assets/z-09-blanco-rojo.webp" },
      { name: "Tenis retro azul claro", meta: "Estilo running retro en azul claro con paneles grises y detalles plateados.", price: "$180.000", variants: sizes, img: "assets/z-10-azul-claro.webp" },
      { name: "Tenis blanco con tres franjas", meta: "Cuero blanco con franjas negras, punta reforzada y detalle dorado en el talón.", price: "$180.000", variants: sizes, img: "assets/z-11-blanco-tres-franjas.webp" },
      { name: "Tenis negro charol", meta: "Cuero negro completo con logo en charol brillante. Silueta baja clásica.", price: "$150.000", variants: sizes, img: "assets/z-12-negro-charol.webp" },
      { name: "Tenis blanco con cordones rosados", meta: "Tejido blanco, suela alta perforada y cordones rosados. Modelo de mujer.", price: "$180.000", variants: sizes, img: "assets/z-13-blanco-rosado.webp" },
      { name: "Tenis blanco y azul claro", meta: "Malla blanca con paneles azul claro y suela alta perforada.", price: "$180.000", variants: sizes, img: "assets/z-14-blanco-azul-claro.webp" },
      { name: "Tenis negro y blanco de suela alta", meta: "Panel superior negro con base blanca y suela perforada tipo cloud.", price: "$180.000", variants: sizes, img: "assets/z-15-negro-blanco-cloud.webp" },
      { name: "Tenis baja negro y blanco", meta: "Cuero blanco con bloques negros, silueta baja clásica.", price: "$180.000", variants: sizes, img: "assets/z-16-panda-negro-blanco.webp" },
      { name: "Tenis retro crema y gris", meta: "Malla crema con paneles grises, suela voluminosa y detalles plateados.", price: "$175.000", variants: sizes, img: "assets/z-17-crema-gris.webp" },
      { name: "Tenis retro gris hueso", meta: "Gamuza y malla en tonos gris hueso con suela voluminosa.", price: "$175.000", variants: sizes, img: "assets/z-18-gris-hueso.webp" },
      { name: "Tenis running blanco y crema", meta: "Tejido blanco con suela crema perforada y detalles rojos en los cordones.", price: "$175.000", variants: sizes, img: "assets/z-19-blanco-crema.webp" },
      { name: "Tenis running hueso y coral", meta: "Malla hueso con degradado coral, letras laterales y suela perforada.", price: "$155.000", variants: sizes, img: "assets/z-20-hueso-coral.webp" },
      { name: "Tenis running gris y café", meta: "Malla gris degradada con collar café y detalles naranja en la suela.", price: "$155.000", variants: sizes, img: "assets/z-21-gris-cafe.webp" },
      { name: "Tenis negro con suela coral", meta: "Silueta retro de correr en negro total con suela coral.", price: "$155.000", variants: sizes, img: "assets/z-22-negro-suela-coral.webp" },
      { name: "Tenis negro con suela roja", meta: "Malla y cuero negro con banda lateral y suela roja.", price: "$175.000", variants: sizes, img: "assets/z-23-negro-suela-roja.webp" },
      { name: "Tenis retro blanco y gris", meta: "Gamuza blanca con malla gris, suela voluminosa y cápsula trasera.", price: "$165.000", variants: sizes, img: "assets/z-24-blanco-gris-retro.webp" },
      { name: "Tenis baja blanco y gris", meta: "Cuero y gamuza en blanco, gris y celeste con detalle dorado.", price: "$185.000", variants: sizes, img: "assets/z-25-blanco-gris-baja.webp" },
      { name: "Tenis retro beige y crema", meta: "Gamuza beige con malla gris y suela crema voluminosa.", price: "$175.000", variants: sizes, img: "assets/z-26-beige-crema.webp" },
      { name: "Tenis blanco con suela caramelo", meta: "Cuero blanco monocromático con suela caramelo.", price: "$165.000", variants: sizes, img: "assets/z-27-blanco-suela-caramelo.webp" },
      { name: "Tenis negro con suela blanca", meta: "Malla y cuero negro con detalles blancos en los cordones y suela blanca texturizada.", price: "$155.000", variants: sizes, img: "assets/z-28-negro-suela-blanca-malla.webp" },
      { name: "Tenis negro con cristales", meta: "Silueta baja negra con aplicación de cristales en franjas y talón.", price: "$165.000", variants: sizes, img: "assets/z-29-negro-cristales.webp" },
      { name: "Tenis running blanco y café", meta: "Malla blanca con talón café y suela con base caramelo.", price: "$175.000", variants: sizes, img: "assets/z-30-blanco-cafe-supernova.webp" },
      { name: "Tenis running negro Supernova", meta: "Malla negra con franjas reflectivas y suela negra amortiguada.", price: "$160.000", variants: sizes, img: "assets/z-31-negro-total-supernova.webp" },
      { name: "Tenis running blanco y azul", meta: "Malla blanca con franjas azul cielo y talón azul.", price: "$175.000", variants: sizes, img: "assets/z-32-blanco-azul-supernova.webp" },
      { name: "Tenis blanco con franjas negras", meta: "Cuero blanco con tres franjas negras, punta reforzada y talón negro.", price: "$175.000", variants: sizes, img: "assets/z-33-blanco-franjas-negras-corazon.webp" },
      { name: "Tenis blanco con suela negra", meta: "Cuero blanco con franjas negras y grises, punta reforzada negra.", price: "$165.000", variants: sizes, img: "assets/z-34-blanco-suela-negra.webp" },
      { name: "Tenis blanco con franjas lila", meta: "Malla blanca con franjas lila y suela clara. Modelo de mujer.", price: "$165.000", variants: sizes, img: "assets/z-35-blanco-franjas-lila.webp" },
      { name: "Tenis blanco con talón verde", meta: "Cuero blanco liso con talón verde y suela blanca. Clásico de tenis.", price: "$165.000", variants: sizes, img: "assets/z-36-blanco-talon-verde.webp" },
      { name: "Tenis negro y gris con estrella", meta: "Charol negro y gris con estrella lateral y suela blanca.", price: "$165.000", variants: sizes, img: "assets/z-37-negro-gris-estrella.webp" },
      { name: "Tenis blanco y negro con estrella", meta: "Cuero blanco con paneles de charol negro y estrella lateral.", price: "$165.000", variants: sizes, img: "assets/z-38-blanco-negro-estrella.webp" },
      { name: "Tenis running blanco y negro", meta: "Malla blanca con tres franjas negras y suela amortiguada blanca.", price: "$165.000", variants: sizes, img: "assets/z-39-blanco-franjas-negras-running.webp" },
      { name: "Tenis running negro y gris", meta: "Malla negra con franjas gris oscuro y suela negra amortiguada.", price: "$185.000", variants: sizes, img: "assets/z-40-negro-gris-running.webp" },
      { name: "Tenis running negro y blanco", meta: "Malla negra con franjas blancas y suela blanca amortiguada.", price: "$165.000", variants: sizes, img: "assets/z-41-negro-franjas-blancas.webp" },
      { name: "Tenis running blanco liviano", meta: "Malla blanca con franjas negras y suela blanca de perfil bajo.", price: "$165.000", variants: sizes, img: "assets/z-42-blanco-franjas-negras-galaxy.webp" },
      { name: "Tenis running rosado y plata", meta: "Malla rosada con franjas plateadas y talón gris. Modelo de mujer.", price: "$165.000", variants: sizes, img: "assets/z-43-rosado-plata.webp" },
      { name: "Tenis running negro y oro rosa", meta: "Malla negra con franjas en oro rosa y suela crema.", price: "$165.000", variants: sizes, img: "assets/z-44-negro-oro-rosa.webp" },
      { name: "Tenis running azul marino", meta: "Malla azul marino con franjas blancas y perfil azul rey.", price: "$165.000", variants: sizes, img: "assets/z-45-azul-marino-blanco.webp" },
      { name: "Tenis running negro con degradado", meta: "Malla negra con franjas blancas y suela con degradado naranja a fucsia.", price: "$165.000", variants: sizes, img: "assets/z-46-negro-degradado-naranja.webp" },
      { name: "Tenis running azul rey y rojo", meta: "Malla azul rey con franjas rojas y suela blanca amortiguada.", price: "$150.000", variants: sizes, img: "assets/z-47-azul-rey-rojo.webp" },
      { name: "Tenis running blanco con degradado", meta: "Malla blanca con franjas negras y suela con degradado rojo a amarillo.", price: "$175.000", variants: sizes, img: "assets/z-48-blanco-degradado-rojo.webp" },
      { name: "Tenis running negro con suela blanca", meta: "Malla negra jaspeada con franjas blancas y suela blanca amortiguada.", price: "$175.000", variants: sizes, img: "assets/z-49-negro-blanco-duramo.webp" },
      { name: "Tenis running turquesa", meta: "Malla turquesa con franjas azul oscuro y detalle amarillo en la suela.", price: "$175.000", variants: sizes, img: "assets/z-50-turquesa-azul.webp" },
      { name: "Tenis running blanco con franjas negras", meta: "Malla blanca con tres franjas negras y suela blanca de alta amortiguación.", price: "$175.000", variants: sizes, img: "assets/z-51-blanco-franjas-negras-cloud.webp" },
      { name: "Tenis running negro suela cloud", meta: "Malla negra perforada con franjas en negro brillante y suela negra amortiguada.", price: "$175.000", variants: sizes, img: "assets/z-52-negro-total-cloud.webp" },
      { name: "Tenis running negro mate", meta: "Malla negra con franjas del mismo tono y suela gris oscuro de perfil alto.", price: "$175.000", variants: sizes, img: "assets/z-53-negro-total-mate.webp" },
      { name: "Tenis running hueso y oro rosa", meta: "Tejido hueso con franjas en oro rosa, cordones bicolor y suela crema.", price: "$175.000", variants: sizes, img: "assets/z-54-hueso-oro-rosa.webp" },
      { name: "Tenis running negro con suela degradada", meta: "Malla negra con franjas blancas, tirador gris y suela con degradado gris.", price: "$175.000", variants: sizes, img: "assets/z-55-negro-suela-degradada.webp" },
      { name: "Tenis running blanco total", meta: "Tejido blanco con franjas del mismo tono, cordones jaspeados y suela crema alta.", price: "$160.000", variants: sizes, img: "assets/z-56-blanco-total-alto.webp" },
      { name: "Tenis running hueso con degradado", meta: "Tejido hueso con franjas en degradado gris y beige y suela gris de perfil alto.", price: "$160.000", variants: sizes, img: "assets/z-57-hueso-degradado-gris.webp" },
      { name: "Tenis running negro con detalle lila", meta: "Malla negra con franjas plateadas, talón lila y suela blanca. Modelo de mujer.", price: "$165.000", variants: sizes, img: "assets/z-58-negro-lila-plata.webp" },
      { name: "Tenis media caña blanco y gris", meta: "Cuero blanco con gamuza gris, textura cemento y suela translúcida.", price: "$170.000", variants: sizes, img: "assets/z-59-blanco-gris-cemento.webp" },
      { name: "Tenis clásico negro calavera", meta: "Cuero negro completo con tres franjas del mismo tono, rayo lateral y estampados blancos.", price: "$150.000", variants: sizes, img: "assets/z-60-negro-total-calavera.webp" },
      { name: "Tenis clásico negro con suela crema", meta: "Cuero negro con franjas del mismo tono, punta reforzada y suela crema.", price: "$170.000", variants: sizes, img: "assets/z-61-negro-suela-crema.webp" },
      { name: "Tenis running azul rey", meta: "Malla azul rey con franjas blancas, cordones jaspeados y suela azul de perfil alto.", price: "$160.000", variants: sizes, img: "assets/z-62-azul-rey-blanco.webp" },
      { name: "Tenis clásico negro con franjas blancas", meta: "Cuero negro con tres franjas blancas, punta reforzada y detalle dorado.", price: "$175.000", variants: sizes, img: "assets/z-63-negro-franjas-blancas-punta.webp" },
      { name: "Tenis media caña blanco, negro y gris", meta: "Cuero blanco con paneles negros y gamuza gris, suela blanca acolchada.", price: "$170.000", variants: sizes, img: "assets/z-64-blanco-negro-gris-alto.webp" },
      { name: "Tenis media caña negro total", meta: "Malla negra con puntos, cuello acolchado y suela negra voluminosa con ventana en el talón.", price: "$180.000", variants: sizes, img: "assets/z-65-bota-negro-total.webp" },
      { name: "Tenis media caña azul claro y hueso", meta: "Gamuza azul claro con paneles hueso y gris, suela blanca con detalle azul.", price: "$180.000", variants: sizes, img: "assets/z-66-bota-azul-claro-hueso.webp" },
      { name: "Tenis running negro suela ondulada", meta: "Malla negra con refuerzos, logo bordado y suela ondulada perforada.", price: "$150.000", variants: sizes, img: "assets/z-67-running-negro-suela-ondulada.webp" },
      { name: "Tenis running crema y rosa", meta: "Tejido crema liviano con logo en tono rosa cobre y suela flexible ranurada.", price: "$180.000", variants: sizes, img: "assets/z-68-running-crema-rosa.webp" },
      { name: "Tenis retro blanco y negro", meta: "Malla blanca con paneles plateados, detalles negros y suela voluminosa.", price: "$180.000", variants: sizes, img: "assets/z-69-retro-blanco-negro.webp" },
      { name: "Tenis retro blanco total", meta: "Malla y cuero blanco completo con suela voluminosa dentada.", price: "$180.000", variants: sizes, img: "assets/z-70-retro-blanco-total.webp" },
      { name: "Tenis blanco total con cámara de aire", meta: "Cuero y malla blanca, refuerzos moldeados y cámara de aire visible en el talón.", price: "$180.000", variants: sizes, img: "assets/z-71-airmax-blanco-total.webp" },
      { name: "Tenis clásico bajo gris y hueso", meta: "Gamuza gris con paneles hueso, logo dorado en la lengua y suela blanca.", price: "$175.000", variants: sizes, img: "assets/z-72-baja-gris-hueso.webp" },
      { name: "Tenis retro blanco y plata", meta: "Malla blanca con paneles plateados metalizados y suela blanca voluminosa.", price: "$175.000", variants: sizes, img: "assets/z-73-retro-blanco-plata.webp" },
      { name: "Tenis retro rosa palo", meta: "Malla rosa palo con detalles grises y suela crema con base azul claro.", price: "$175.000", variants: sizes, img: "assets/z-74-retro-rosa-palo.webp" },
      { name: "Tenis media caña blanco y negro charol", meta: "Cuero blanco con paneles en charol negro y suela blanca con borde negro.", price: "$155.000", variants: sizes, img: "assets/z-75-bota-blanco-negro-charol.webp" },
      { name: "Tenis media caña negro charol y azul hielo", meta: "Charol negro con paneles azul hielo, insignia dorada y suela blanca.", price: "$155.000", variants: sizes, img: "assets/z-76-bota-negro-azul-hielo.webp" },
      { name: "Tenis running gris y azul rey", meta: "Malla gris con franjas blancas, talón azul rey y suela blanca amortiguada.", price: "$155.000", variants: sizes, img: "assets/z-77-running-gris-azul-rey.webp" },
      { name: "Tenis running vino y neón", meta: "Malla vino jaspeada con franjas grises y entresuela verde neón.", price: "$175.000", variants: sizes, img: "assets/z-78-running-vino-neon.webp" },
      { name: "Tenis retro blanco, crema y negro", meta: "Malla blanca con paneles plateados, detalles negros y suela crema.", price: "$165.000", variants: sizes, img: "assets/z-79-retro-blanco-crema-negro.webp" },
      { name: "Tenis media caña amarillo y negro", meta: "Cuero amarillo con bloques negros, insignia lateral y suela blanca.", price: "$185.000", variants: sizes, img: "assets/z-80-bota-amarillo-negro.webp" },
      { name: "Tenis media caña blanco con estampado", meta: "Cuero blanco con estampado en relieve, logo negro y suela roja.", price: "$175.000", variants: sizes, img: "assets/z-81-bota-blanco-estampado-rojo.webp" },
      { name: "Tenis media caña rojo y negro", meta: "Cuero rojo con bloques negros, insignia lateral y suela roja con base blanca.", price: "$165.000", variants: sizes, img: "assets/z-82-bota-rojo-negro.webp" },
      { name: "Tenis media caña negro charol", meta: "Charol negro completo con logo en relieve y suela roja.", price: "$155.000", variants: sizes, img: "assets/z-83-bota-negro-charol-suela-roja.webp" },
      { name: "Tenis running blanco, plata y rojo", meta: "Malla blanca con paneles plateados, acentos rojos y suela blanca con negro.", price: "$165.000", variants: sizes, img: "assets/z-84-running-blanco-plata-rojo.webp" },
      { name: "Tenis media caña negro con letras blancas", meta: "Cuero negro con letras AIR en relieve blanco, cámara de aire visible y suela negra voluminosa.", price: "$175.000", variants: sizes, img: "assets/z-85-air-negro-blanco.webp" },
      { name: "Tenis running hueso y azul marino", meta: "Malla hueso con paneles grises, detalles azul marino y entresuela crema.", price: "$175.000", variants: sizes, img: "assets/z-86-running-hueso-azul-marino.webp" },
      { name: "Tenis clásico blanco con franjas azules", meta: "Cuero blanco con tres franjas azules, punta de concha reforzada y talón azul.", price: "$175.000", variants: sizes, img: "assets/z-87-superstar-blanco-azul.webp" },
      { name: "Tenis bajo blanco con talón verde", meta: "Cuero blanco perforado, logo lateral y suela crema con talón verde.", price: "$165.000", variants: sizes, img: "assets/z-88-diesel-blanco-verde.webp" },
      { name: "Tenis bajo negro total", meta: "Cuero negro completo con logo rojo en el lateral y suela negra.", price: "$165.000", variants: sizes, img: "assets/z-89-diesel-negro-total.webp" },
      { name: "Tenis running blanco, plata y verde", meta: "Malla blanca con paneles plateados, detalles verde bosque y suela blanca.", price: "$165.000", variants: sizes, img: "assets/z-90-running-blanco-plata-verde.webp" },
      { name: "Tenis bajo gris humo y blanco", meta: "Gamuza gris con paneles blancos, logo lateral y suela blanca.", price: "$165.000", variants: sizes, img: "assets/z-91-bajo-gris-humo.webp" },
      { name: "Tenis skate café y beige", meta: "Gamuza café con paneles beige, franja lateral blanca y suela de goma.", price: "$165.000", variants: sizes, img: "assets/z-92-skate-cafe-beige.webp" },
      { name: "Tenis bajo negro charol", meta: "Charol negro con paneles mate, logo gris y suela blanca con negro.", price: "$165.000", variants: sizes, img: "assets/z-93-bajo-negro-charol.webp" },
      { name: "Tenis skate negro y gris", meta: "Gamuza negra con paneles grises, franja lateral blanca y suela blanca con gum.", price: "$185.000", variants: sizes, img: "assets/z-94-skate-negro-gris-gum.webp" },
      { name: "Tenis retro blanco y rosa", meta: "Cuero blanco con paneles rosa y gris, logo dorado y suela gum.", price: "$165.000", variants: sizes, img: "assets/z-95-retro-blanco-rosa-gum.webp" },
      { name: "Bota outdoor negro total", meta: "Malla y refuerzos negros, cordones con traba y suela dentada de alto agarre.", price: "$165.000", variants: sizes, img: "assets/z-96-outdoor-negro-total.webp" },
      { name: "Tenis clásico blanco con franjas negras", meta: "Cuero blanco con tres franjas negras, punta de concha reforzada y suela negra.", price: "$165.000", variants: sizes, img: "assets/z-97-clasico-blanco-franjas-negras.webp" },
      { name: "Tenis running blanco y azul claro", meta: "Malla blanca con franjas azul claro y entresuela alta amortiguada.", price: "$165.000", variants: sizes, img: "assets/z-98-running-blanco-azul-claro.webp" },
      { name: "Tenis retro crema y azul marino", meta: "Malla crema con paneles azul marino, logo lateral y suela voluminosa.", price: "$165.000", variants: sizes, img: "assets/z-99-retro-crema-azul-marino.webp" }
];

const chanclasRaw = [
      { name: "Adidas Adilette Comfort — 7 colores", meta: "Banda de goma con tres franjas y plantilla acolchada. Disponible en azul rey, gris, blanca, azul marino, negra, roja y negra total.", price: "$90.000", variants: sizes, img: "assets/ch-rueda-colores.webp", colors: [{ name: "Azul rey", hex: "#1a49b8", img: "assets/ch-c1-azul-rey.webp" }, { name: "Gris", hex: "#9a9ea3", img: "assets/ch-c2-gris.webp" }, { name: "Blanca", hex: "#f2f2f0", img: "assets/ch-c3-blanca.webp" }, { name: "Azul marino", hex: "#1e2a5a", img: "assets/ch-c4-azul-marino.webp" }, { name: "Negra con franjas", hex: "#111113", img: "assets/ch-c5-negra-franjas-blancas.webp" }, { name: "Roja", hex: "#d81f26", img: "assets/ch-c6-roja.webp" }, { name: "Negra total", hex: "#2a2a2c", img: "assets/ch-c7-negra-total.webp" }] },
      { name: "Dior monogram negro", meta: "Banda ajustable con estampado monogram gris y negro, plantilla acolchada negra y suela texturizada.", price: "$110.000", variants: sizes, img: "assets/ch-01.webp" },
      { name: "Dior monogram azul", meta: "Banda ajustable con estampado monogram azul y blanco, plantilla negra acolchada y suela negra.", price: "$110.000", variants: sizes, img: "assets/ch-02.webp" },
      { name: "Dior monogram café y crema", meta: "Banda con estampado monogram café sobre crema, base blanco hueso y suela dentada.", price: "$110.000", variants: sizes, img: "assets/ch-03.webp" },
      { name: "Gucci GG negro con hebillas", meta: "Doble banda GG en tono negro con hebillas plateadas, plantilla acolchada y suela de goma.", price: "$110.000", variants: sizes, img: "assets/ch-04.webp" },
      { name: "Gucci GG naranja con hebillas", meta: "Doble banda de cuero naranja con relieve GG, hebillas doradas y base café.", price: "$95.000", variants: sizes, img: "assets/ch-05.webp" },
      { name: "Dior denim azul claro", meta: "Banda ancha en denim azul claro con logo bordado en blanco y base negra acolchada.", price: "$110.000", variants: sizes, img: "assets/ch-06.webp" },
      { name: "Dior denim azul oscuro", meta: "Banda ancha en denim azul oscuro con logo bordado y plantilla negra acolchada.", price: "$110.000", variants: sizes, img: "assets/ch-07.webp" },
      { name: "Dior negro texturizado", meta: "Banda en tejido negro con logo bordado blanco, base negra acolchada y suela dentada.", price: "$110.000", variants: sizes, img: "assets/ch-08.webp" },
      { name: "Dior monogram rojo", meta: "Banda ajustable con estampado monogram rojo y blanco sobre base negra acolchada.", price: "$110.000", variants: sizes, img: "assets/ch-09.webp" },
      { name: "Adidas Adilette negra", meta: "Banda de goma negra con tres franjas blancas y base moldeada de un solo bloque.", price: "$95.000", variants: sizes, img: "assets/ch-10.webp" },
      { name: "Adidas Adilette blanca", meta: "Banda de goma blanca con tres franjas negras y base moldeada de un solo bloque.", price: "$90.000", variants: sizes, img: "assets/ch-11.webp" },
      { name: "Adidas Adilette turquesa", meta: "Banda de goma turquesa con tres franjas blancas y base moldeada ligera.", price: "$95.000", variants: sizes, img: "assets/ch-12.webp" },
      { name: "Adidas Adilette rosa", meta: "Banda de goma rosa con tres franjas blancas y base moldeada ligera.", price: "$90.000", variants: sizes, img: "assets/ch-13.webp" },
      { name: "Amiri beige", meta: "Banda con textura floral en relieve y logo en azul oscuro, base beige acolchada.", price: "$90.000", variants: sizes, img: "assets/ch-14.webp" },
      { name: "Tommy Hilfiger azul rey", meta: "Banda con bandera roja, blanca y azul sobre base azul rey moldeada.", price: "$95.000", variants: sizes, img: "assets/ch-15.webp" },
      { name: "Tommy Hilfiger negra", meta: "Banda con bandera roja, blanca y azul sobre base negra moldeada.", price: "$75.000", variants: sizes, img: "assets/ch-16.webp" },
      { name: "Amiri negra", meta: "Banda con textura floral en relieve y logo blanco, base negra acolchada.", price: "$90.000", variants: sizes, img: "assets/ch-17.webp" },
      { name: "Amiri azul", meta: "Banda con textura floral en relieve y logo en tono oscuro, base azul acolchada.", price: "$90.000", variants: sizes, img: "assets/ch-18.webp" },
      { name: "Diesel verde militar", meta: "Banda ancha de goma verde militar con logo en relieve negro y base texturizada.", price: "$95.000", variants: sizes, img: "assets/ch-19.webp" },
      { name: "Gucci logo negra", meta: "Banda de cuero negro con logo en blanco y detalles verdes, plantilla con relieve.", price: "$95.000", variants: sizes, img: "assets/ch-20.webp" },
      { name: "Gucci logo crema", meta: "Banda de cuero crema con logo en negro, plantilla con relieve y base blanco hueso.", price: "$110.000", variants: sizes, img: "assets/ch-21.webp" },
      { name: "Gucci logo gris azulado", meta: "Banda de cuero gris azulado con logo en blanco y base con relieve del mismo tono.", price: "$95.000", variants: sizes, img: "assets/ch-22.webp" },
      { name: "Tommy Hilfiger azul marino", meta: "Banda con bandera roja, blanca y azul sobre base azul marino moldeada.", price: "$95.000", variants: sizes, img: "assets/ch-23.webp" },
      { name: "Adidas Adilette verde y blanca", meta: "Banda blanca con tres franjas verdes y firma Adilette, base verde oscuro acolchada.", price: "$95.000", variants: sizes, img: "assets/ch-24.webp" },
      { name: "Adidas Adilette verde tejida", meta: "Banda verde con textura tejida y cintas negras con logo, base verde moldeada.", price: "$90.000", variants: sizes, img: "assets/ch-25.webp" },
      { name: "Adidas Adilette roja y negra", meta: "Banda roja con cintas blancas y logo repetido, base negra moldeada.", price: "$95.000", variants: sizes, img: "assets/ch-26.webp" },
      { name: "Diesel banda blanca", meta: "Banda ancha blanca con logo negro en relieve y base negra texturizada.", price: "$95.000", variants: sizes, img: "assets/ch-27.webp" },
      { name: "Diesel negra con logo rojo", meta: "Banda negra con logo rojo en relieve y filo rojo, base negra texturizada.", price: "$95.000", variants: sizes, img: "assets/ch-28.webp" },
      { name: "Adidas Adilette negra y blanca", meta: "Banda negra con tres franjas blancas y firma Adilette, base negra con suela blanca.", price: "$90.000", variants: sizes, img: "assets/ch-29.webp" },
      { name: "Adidas Adilette Cloudfoam beige", meta: "Banda beige con tres franjas blancas, base hueso con plantilla acolchada Cloudfoam.", price: "$95.000", variants: sizes, img: "assets/ch-30.webp" },
      { name: "Adidas Adilette Cloudfoam blanca y verde menta", meta: "Banda blanca con tres franjas negras y base verde menta con plantilla Cloudfoam.", price: "$90.000", variants: sizes, img: "assets/ch-31.webp" },
      { name: "Adidas Adilette Cloudfoam negra", meta: "Banda negra con tres franjas blancas y base negra con plantilla acolchada Cloudfoam.", price: "$95.000", variants: sizes, img: "assets/ch-32.webp" },
      { name: "Adidas Adilette Cloudfoam fucsia", meta: "Banda fucsia con tres franjas blancas y base fucsia con plantilla acolchada Cloudfoam.", price: "$90.000", variants: sizes, img: "assets/ch-33.webp" }
];

const ropaRaw = [
      { name: "Jogger Hugo Boss cinta lateral", tipo: "Pantalones", meta: "Jogger en algodón con pretina elástica, cinta lateral con logo BOSS repetido, bolsillos ribeteados y puños acanalados.", price: "$120.000", variants: tallasRopa, img: "uploads/FOTO%20FINAL/bea9c8c2-d683-4908-ad6a-e95af6137940.webp", colors: [
        { name: "Negro", hex: "#141416", img: "uploads/FOTO%20FINAL/b9132540-b6b8-4200-8dea-742e2deeae0c.webp" },
        { name: "Gris oscuro", hex: "#3d3f3e", img: "uploads/FOTO%20FINAL/0659a238-93e9-41b6-8a7f-f826fcfb63ee.webp" },
        { name: "Gris salvia", hex: "#8d928a", img: "uploads/FOTO%20FINAL/18dbcaf6-7277-431f-830e-6bbb18d32604.webp" },
        { name: "Azul marino (bermuda)", hex: "#141c2e", img: "uploads/FOTO%20FINAL/8256e4d4-fb38-4c32-ae0e-28795165e327.webp" }
      ] },
      { name: "Jogger Nike Bowerman Drive", tipo: "Pantalones", meta: "Jogger en algodón perchado con pretina acanalada, bolsillos con cierre, puños elásticos y Swoosh con dirección Bowerman Drive.", price: "$65.000", variants: tallasRopa, img: "uploads/FOTO%2010/49fedde7-9c57-41d3-b6fe-62e73c220f90.webp", colors: [
        { name: "Negro", hex: "#141416", img: "uploads/FOTO%2010/ba09beec-4917-409a-af15-dbe968011c6a.webp" },
        { name: "Azul marino", hex: "#1b2438", img: "uploads/FOTO%2010/e78f32d6-a6cd-468d-a0ee-f6058446b074.webp" },
        { name: "Gris", hex: "#9a9c9e", img: "uploads/FOTO%2010/dfb7d92e-1288-43ce-804f-c452dd1c22d7.webp" },
        { name: "Verde militar", hex: "#5b6237", img: "uploads/FOTO%2010/c9147794-2446-467d-87e5-ed5f234907c7.webp" },
        { name: "Beige", hex: "#b3ac8c", img: "uploads/FOTO%2010/f9d92abc-4f83-4b52-9054-6e5031027606.webp" }
      ] },
      { name: "Pantaloneta Adidas 2 en 1 panel curvo", tipo: "Pantalones", meta: "Pantaloneta deportiva 2 en 1 con licra interna, pretina elástica con letras Adidas y paneles blancos curvos.", price: "$65.000", variants: tallasRopa, img: "uploads/FOTO%2010/ecb4682e-2d46-448b-bce9-3ece7da283e4.webp", colors: [
        { name: "Azul marino", hex: "#1e2545", img: "uploads/FOTO%2010/c2c72761-5e7c-4fd2-86e7-fc922f356f40.webp" },
        { name: "Gris", hex: "#4e5a60", img: "uploads/FOTO%2010/5ade794d-b80c-4e97-bcd3-2ca7684c4afb.webp" },
        { name: "Negro", hex: "#141416", img: "uploads/FOTO%2010/7c3aa5ed-8a23-4491-baba-933b6f4ae95f.webp" }
      ] },
      { name: "Jean recto negro", tipo: "Pantalones", meta: "Jean de corte recto y holgado en denim negro lavado, cinco bolsillos y etiqueta en el bolsillo delantero.", price: "$150.000", variants: tallasRopa, img: "uploads/FOTO%2010/a5575f76-a11f-4fd7-8e28-f84324532ede.webp", modelo: "uploads/FOTO%2010/262dd6c2-848a-4139-b7b6-babb028385ac.webp" },
      { name: "Pantaloneta ciclista Alo con bolsillos", tipo: "Pantalones", meta: "Pantaloneta ciclista de tiro alto en tejido suave, con bolsillos laterales y logo alo en la pretina.", price: "$45.000", variants: tallasRopa, img: "uploads/FOTO%209/27205b0e-fe83-49ca-8886-8a9017bf909b.webp", colors: [
        { name: "Negro", hex: "#141416", img: "uploads/FOTO%209/6404d0b4-a412-4de6-8bc7-ae551a66f49c.webp" },
        { name: "Gris", hex: "#6f7076", img: "uploads/FOTO%209/5b12be4b-6f7e-4081-8453-388699b062d4.webp" },
        { name: "Hueso", hex: "#dedbd6", img: "uploads/FOTO%209/7e3368cc-2db1-4509-8e68-eba10b6b6b9f.webp" },
        { name: "Azul marino", hex: "#28327d", img: "uploads/FOTO%209/2291bb00-3b71-4c81-8a42-67623d2ec5f1.webp" },
        { name: "Verde militar", hex: "#6d7a4f", img: "uploads/FOTO%209/70db82b2-9ea1-4ed5-867e-b637e2e1e17e.webp" },
        { name: "Verde neón", hex: "#b6d92a", img: "uploads/FOTO%209/14dc3da9-b5bd-4f1c-86e0-f9bd94ca74d1.webp" },
        { name: "Vino", hex: "#a01d2c", img: "uploads/FOTO%209/89078903-abd1-4634-8faf-eb55dca3121d.webp" },
        { name: "Café", hex: "#8a5637", img: "uploads/FOTO%209/9dbc394a-33d9-421b-836f-01d8bd2f63b5.webp" },
        { name: "Fucsia", hex: "#f0169a", img: "uploads/FOTO%209/97825258-f008-4a83-944d-27093dbe9d8d.webp" },
        { name: "Malva", hex: "#bb9db1", img: "uploads/FOTO%209/43347a87-e07a-4768-8d4e-01c48c240a0f.webp" },
        { name: "Rosa palo", hex: "#dda99c", img: "uploads/FOTO%209/9407f71f-c13e-4c2f-9968-bff3c1ec6fb6.webp" }
      ] },
      { name: "Jogger Clemont gótico", tipo: "Pantalones", meta: "Jogger en algodón con pretina acanalada, bolsillos verticales, puños elásticos y bordado Clemont en letra gótica.", price: "$65.000", variants: tallasRopa, img: "uploads/FOTO%209/64d39296-edcc-4711-a113-4e0309bfc600.webp", colors: [
        { name: "Negro logo blanco", hex: "#141416", img: "uploads/FOTO%209/8fb92e55-ac62-4994-b272-dcf29277fdc0.webp" },
        { name: "Negro logo rojo", hex: "#1c1c1e", img: "uploads/FOTO%209/e7ffe62d-ba61-4dd1-9e11-dd43e6193c64.webp" },
        { name: "Hueso", hex: "#dedbd2", img: "uploads/FOTO%209/24a4fc6c-35fd-44d9-ab9d-52f984bc0694.webp" },
        { name: "Gris verdoso", hex: "#b4b5a6", img: "uploads/FOTO%209/971b7977-a07e-44c6-875e-78dd922bcb36.webp" },
        { name: "Café", hex: "#6f5c42", img: "uploads/FOTO%209/a7d76700-5bc9-4829-a5ef-73496a850616.webp" }
      ] },
      { name: "Jean recto azul claro", tipo: "Pantalones", meta: "Jean de corte recto y holgado en denim azul claro con textura jaspeada y cinco bolsillos.", price: "$150.000", variants: tallasRopa, img: "uploads/FOTO%209/5a1a29a3-1880-4871-88fd-051593b3ab6f.webp", modelo: "uploads/FOTO%209/acb91a08-f49f-4e68-b15f-4a1f1446731d.webp" },
      { name: "Pantaloneta ciclista Nike con bolsillos", tipo: "Pantalones", meta: "Pantaloneta ciclista de tiro alto en tejido Dri-FIT, con bolsillos laterales y Swoosh en la pretina.", price: "$45.000", variants: tallasRopa, img: "uploads/FOTO%208/2649974c-63c1-4dd6-982b-395acebc277e.webp", colors: [
        { name: "Negro", hex: "#141416", img: "uploads/FOTO%208/ae192817-293c-49b4-8f32-e2566d5a36eb.webp" },
        { name: "Gris oscuro", hex: "#565a60", img: "uploads/FOTO%208/46292810-3f66-4c53-a83f-8509d13f6766.webp" },
        { name: "Blanco", hex: "#e8e8e6", img: "uploads/FOTO%208/c0082189-85e5-4803-829d-dc8aed3d22b0.webp" },
        { name: "Azul marino", hex: "#26306b", img: "uploads/FOTO%208/c4fb8911-0170-49e8-b33a-1ab0b78c71c1.webp" },
        { name: "Verde militar", hex: "#6b7448", img: "uploads/FOTO%208/55c071b1-4ef3-4518-ad86-19ac5e3bc1d3.webp" },
        { name: "Verde neón", hex: "#a8d61a", img: "uploads/FOTO%208/f2f0e158-f5c9-46da-b0c7-26078578e181.webp" },
        { name: "Café", hex: "#6f3f24", img: "uploads/FOTO%208/8314a8a9-da77-40ea-82d8-7e38341a712f.webp" },
        { name: "Vino", hex: "#7c1c2b", img: "uploads/FOTO%208/b3cfc7ec-88eb-41c6-a5cf-9659af0b0a81.webp" },
        { name: "Fucsia", hex: "#ec1e91", img: "uploads/FOTO%208/7c0cffab-6203-4456-83ed-73e527fffe48.webp" },
        { name: "Malva", hex: "#b287a0", img: "uploads/FOTO%208/57f1e493-4780-40ce-8450-f9bb95a19f9d.webp" },
        { name: "Rosa palo", hex: "#e0a89b", img: "uploads/FOTO%208/08ad0fd4-0cea-4e61-8fe3-ebf366745a27.webp" }
      ] },
      { name: "Jogger Adidas Sportswear puño elástico", tipo: "Pantalones", meta: "Jogger en tela liviana con pretina acanalada, bolsillos verticales, puños elásticos y logo Adidas Sportswear.", price: "$65.000", variants: tallasRopa, img: "uploads/FOTO%208/60cbd6d4-4721-4824-aeb9-f41451babf06.webp", colors: [
        { name: "Negro", hex: "#141416", img: "uploads/FOTO%208/d519a8a6-6760-4f90-a58b-639a3db0b5a8.webp" },
        { name: "Beige", hex: "#b7a483", img: "uploads/FOTO%208/df0a7518-b772-4534-a80f-d0cf8342ce0e.webp" },
        { name: "Verde militar", hex: "#38412c", img: "uploads/FOTO%208/a0b5d572-b453-43bb-b733-a6b2917acbf2.webp" },
        { name: "Gris", hex: "#8e9194", img: "uploads/FOTO%208/f70f240e-6bdb-4bbd-88cd-a5135c6856fe.webp" },
        { name: "Gris logo verde", hex: "#a3a6a5", img: "uploads/FOTO%208/876a6a58-f106-408c-b657-2c1f9ed940a1.webp" }
      ] },
      { name: "Jean recto azul oscuro", tipo: "Pantalones", meta: "Jean de corte recto en denim azul oscuro con desgastes sutiles, cinco bolsillos y bordado en los bolsillos traseros.", price: "$150.000", variants: tallasRopa, img: "uploads/FOTO%208/5fc1d242-03c1-424a-b44e-0808e99b270b.webp", modelo: "uploads/FOTO%208/9d4956a6-2247-4a1d-9a99-1024e0569d7d.webp" },
      { name: "Conjunto mujer top escote cuadrado", meta: "Conjunto de dos piezas en tejido acanalado: top corto de escote cuadrado con tirantes anchos y leggings de tiro alto con pretina ancha.", price: "$100.000", variants: tallasRopa, img: "uploads/FOTO%207/ChatGPT%20Image%20Sep%207,%202026,%2010_36_01%20PM.webp", colors: [
        { name: "Vino", hex: "#a3122c", img: "uploads/FOTO%207/ChatGPT%20Image%20Sep%207,%202026,%2011_38_25%20PM.webp" },
        { name: "Turquesa", hex: "#1eb4c8", img: "uploads/FOTO%207/ChatGPT%20Image%20Sep%207,%202026,%2011_39_22%20PM.webp" },
        { name: "Naranja", hex: "#f07d12", img: "uploads/FOTO%207/ChatGPT%20Image%20Sep%207,%202026,%2011_41_13%20PM.webp" },
        { name: "Hueso", hex: "#f2efe6", img: "uploads/FOTO%207/ChatGPT%20Image%20Sep%207,%202026,%2011_42_23%20PM.webp" },
        { name: "Azul lila", hex: "#7189de", img: "uploads/FOTO%207/ChatGPT%20Image%20Sep%207,%202026,%2011_44_54%20PM.webp" },
        { name: "Azul acero", hex: "#5b7f9c", img: "uploads/FOTO%207/ChatGPT%20Image%20Sep%207,%202026,%2011_46_11%20PM.webp" }
      ] },
      { name: "Conjunto mujer top asimétrico acanalado", meta: "Conjunto de dos piezas en tejido acanalado: top corto de un solo hombro y short ciclista de tiro alto.", price: "$100.000", variants: tallasRopa, img: "uploads/FOTO%204/ChatGPT%20Image%20Sep%207,%202026,%2010_24_41%20PM.webp", modelo: "uploads/FOTO%204/ChatGPT%20Image%20Sep%207,%202026,%2011_33_57%20PM.webp" },
      { name: "Enterizo corto acanalado", meta: "Enterizo de una pieza en tejido acanalado, tirantes anchos, escote redondo con botonadura y short ajustado.", price: "$100.000", variants: tallasRopa, img: "uploads/FOTO%203/ChatGPT%20Image%20Sep%207,%202026,%2010_30_54%20PM.webp", modelo: "uploads/FOTO%203/ChatGPT%20Image%20Sep%207,%202026,%2011_27_24%20PM.webp" },
      { name: "Conjunto deportivo mujer texturizado", meta: "Conjunto de dos piezas en tejido texturizado sin costuras: top de tirantes delgados y leggings de tiro alto con pretina ancha.", price: "$100.000", variants: tallasRopa, img: "uploads/FOTO%202/ChatGPT%20Image%20Sep%207,%202026,%2011_19_06%20PM.webp", colors: [
        { name: "Fucsia", hex: "#e0198c", img: "uploads/FOTO%202/ChatGPT%20Image%20Sep%207,%202026,%2011_21_49%20PM.webp" },
        { name: "Verde neón", hex: "#3cc63c", img: "uploads/FOTO%202/ChatGPT%20Image%20Sep%207,%202026,%2011_22_43%20PM.webp" },
        { name: "Naranja", hex: "#f0a06a", img: "uploads/FOTO%202/ChatGPT%20Image%20Sep%207,%202026,%2011_23_47%20PM.webp" },
        { name: "Azul", hex: "#41528c", img: "uploads/FOTO%202/ChatGPT%20Image%20Sep%207,%202026,%2011_24_49%20PM.webp" },
        { name: "Morado", hex: "#9a5aad", img: "uploads/FOTO%202/ChatGPT%20Image%20Sep%207,%202026,%2011_22_09%20PM.webp" }
      ] },
      { name: "Conjunto deportivo mujer degradado", meta: "Conjunto de dos piezas en tejido acanalado sin costuras: top de un solo hombro y short ciclista de tiro alto, en degradado.", price: "$100.000", variants: tallasRopa, img: "uploads/FOTO%201/ChatGPT%20Image%20Sep%207,%202026,%2011_06_51%20PM.webp", colors: [
        { name: "Amarillo y rosa", hex: "#f2b23c", img: "uploads/FOTO%201/ChatGPT%20Image%20Sep%207,%202026,%2011_09_19%20PM.webp" },
        { name: "Morado y azul", hex: "#7b5bd6", img: "uploads/FOTO%201/ChatGPT%20Image%20Sep%207,%202026,%2011_11_00%20PM.webp" }
      ] },
      { name: "Camiseta estampada Ten Sei", meta: "Camiseta en algodón con cuello redondo y estampado frontal. Cinco diseños disponibles.", price: "$65.000", variants: tallasRopa, img: "uploads/FOTO 55/edb0ef26-aa04-4a2f-9928-2ea50939124c.webp", colors: [
        { name: "Negra Thug Life", hex: "#141416", img: "uploads/FOTO 55/2aa052d6-21b4-4699-944b-5f43618949cd.webp" },
        { name: "Roja Basketball", hex: "#d81f26", img: "uploads/FOTO 55/3294638f-cb61-4a08-a3d7-6b16a5eea25b.webp" },
        { name: "Verde Sacred Love", hex: "#1d5551", img: "uploads/FOTO 55/a376c1c9-2e42-4b12-9125-089c7b20ac21.webp" },
        { name: "Azul Gangstar", hex: "#8ab6e8", img: "uploads/FOTO 55/afeede88-5078-47fe-b129-6c26b9f4237e.webp" },
        { name: "Beige Ten Sei", hex: "#e0cbaa", img: "uploads/FOTO 55/e8447468-eda8-4d96-bf88-cbcb187e79b3.webp" }
      ] },
      { name: "Camiseta estampada Underground", meta: "Camiseta en algodón con cuello redondo y estampado frontal de la línea Underground. Seis diseños disponibles.", price: "$65.000", variants: tallasRopa, img: "uploads/FOTO 56/9dd466d3-b0f9-4b26-9264-a72247b2214b.webp", colors: [
        { name: "Negra Gangstar", hex: "#141416", img: "uploads/FOTO 56/1ae8b24c-adce-4f36-a3b1-6590f3db37f6.webp" },
        { name: "Blanca Gangstar", hex: "#f7f7f7", img: "uploads/FOTO 56/bdf2f726-c199-4ec6-9ac7-d511c1a8c271.webp" },
        { name: "Roja Stussy", hex: "#d81f26", img: "uploads/FOTO 56/1f4abbf1-515c-4d98-b8a9-30d39da36e8d.webp" },
        { name: "Azul marino Sacred Code", hex: "#1d2436", img: "uploads/FOTO 56/5846ae9b-78b6-4091-b1cc-eb2080103265.webp" },
        { name: "Lila Ten Strikes", hex: "#9d7fe0", img: "uploads/FOTO 56/75ce8ed1-b8cf-476d-b15e-067d52a4e694.webp" },
        { name: "Beige firma", hex: "#d6b183", img: "uploads/FOTO 56/e202544a-7cf0-43fb-80b3-39e77b1d6198.webp" }
      ] },
      { name: "Conjunto New York Knicks", meta: "Conjunto NBA de los New York Knicks: camiseta sin mangas blanca con NEW YORK en azul y naranja, número 11, y pantaloneta blanca con franjas azules.", price: "$55.000", variants: tallasRopa, img: "uploads/FOTO 53/fd8b9ead-7092-4035-8b30-5ba3401b4bf4.webp", modelo: "uploads/FOTO 53/36093aca-6aaf-4f59-84e7-4db98fbdaa33.webp" },
      { name: "Camiseta polo Lacoste", meta: "Polo en piqué de algodón con cuello tejido, botonadura de dos botones y cocodrilo bordado en el pecho.", price: "$65.000", variants: tallasRopa, img: "uploads/FOTO 54/b9657428-0251-418c-9c5e-0b12240d3771.webp", colors: [
        { name: "Blanca", hex: "#f7f7f7", img: "uploads/FOTO 54/b5a2461c-9d9c-4a1e-9dbf-ca7bde033eab.webp" },
        { name: "Negra", hex: "#141416", img: "uploads/FOTO 54/1f9cee88-095f-4c7f-a1e5-81981e98e426.webp" },
        { name: "Verde", hex: "#7ba98f", img: "uploads/FOTO 54/7d718da7-8404-4a1e-939c-5e05c12896a9.webp" },
        { name: "Azul claro", hex: "#8ab6e8", img: "uploads/FOTO 54/dc15a5ff-2299-4f7c-951f-63333390d4f4.webp" },
        { name: "Beige", hex: "#d8c3a5", img: "uploads/FOTO 54/9a5f7816-f202-4729-b505-23f86fddc608.webp" }
      ] },
      { name: "Conjunto Chicago Bulls blanco y dorado", meta: "Conjunto NBA de los Chicago Bulls: camiseta sin mangas blanca con BULLS en negro y dorado, número 14, y pantaloneta blanca con paneles dorados.", price: "$55.000", variants: tallasRopa, img: "uploads/FOTO 52/809599d8-2b71-4951-998d-1d6f96fdf68e.webp", modelo: "uploads/FOTO 52/f7178830-1465-4e50-b3ab-2eb7b4354fe5.webp" },
      { name: "Camiseta polo Ralph Lauren clásica", meta: "Polo en piqué de algodón con cuello tejido, botonadura de dos botones y caballito bordado en el pecho.", price: "$65.000", variants: tallasRopa, img: "uploads/FOTO 51/589cbe63-8276-479e-be62-d7715d87c681.webp", colors: [
        { name: "Negra", hex: "#141416", img: "uploads/FOTO 51/389957f7-81af-4db9-aa69-4222ba04f202.webp" },
        { name: "Blanca", hex: "#f4f1e8", img: "uploads/FOTO 51/793f1462-4c76-4e8e-9a60-1c99529a0c61.webp" },
        { name: "Beige", hex: "#d8c8ae", img: "uploads/FOTO 51/786af540-6dcb-43c3-9bbb-5c3c25b702d0.webp" },
        { name: "Café", hex: "#8b4a26", img: "uploads/FOTO 51/fb8822a7-6a78-4da2-baab-03f463d02053.webp" },
        { name: "Amarilla", hex: "#f2e26a", img: "uploads/FOTO 51/4c2f1ec8-b814-4b4b-9329-477c6eaa9825.webp" },
        { name: "Azul claro", hex: "#8ab4e8", img: "uploads/FOTO 51/b4462a45-ff06-4676-98cc-7d24f503d4e1.webp" }
      ] },
      { name: "Camiseta polo Ralph Lauren", meta: "Polo en piqué de algodón con cuello tejido, botonadura de dos botones y caballito bordado en el pecho.", price: "$65.000", variants: tallasRopa, img: "uploads/FOTO 50/ece7439c-22cb-440d-9e4c-3d8f90d364ac.webp", colors: [
        { name: "Roja", hex: "#b81f26", img: "uploads/FOTO 50/008dd466-e65f-4534-828b-e8313bae762b.webp" },
        { name: "Rosa", hex: "#f3c4bd", img: "uploads/FOTO 50/95894efa-406a-49ea-811d-0d1058c5280e.webp" },
        { name: "Azul claro", hex: "#7e93b5", img: "uploads/FOTO 50/34e09ceb-52cc-47b9-bc34-253455d70c2d.webp" },
        { name: "Crema", hex: "#f2ead1", img: "uploads/FOTO 50/d580ff73-45f1-4efb-83bb-525caeca5b46.webp" },
        { name: "Verde", hex: "#7fa287", img: "uploads/FOTO 50/960bd625-c25c-4e9b-a76d-3f6577b458c0.webp" }
      ] },
      { name: "Conjunto Miami Heat Culture", meta: "Conjunto NBA del Miami Heat: camiseta sin mangas roja con HEAT CULTURE en negro y número 22, y pantaloneta roja con el escudo del equipo.", price: "$55.000", variants: tallasRopa, img: "uploads/FOTO 49/cd5edf28-8597-4608-a4ca-ff6b98852eae.webp", modelo: "uploads/FOTO 49/4dccfdba-b432-40bc-a6cf-63c48a44b0ea.webp" },
      { name: "Jogger Nike Authentic Sport Wear", tipo: "Pantalones", meta: "Jogger con pretina elástica, bolsillos con cierre, logo Nike en círculo y letras NIKE AUTHENTIC SPORT WEAR en la pierna.", price: "$65.000", variants: tallasRopa, img: "assets/p-92-nikeauth-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-92-nikeauth-negro.webp" },
        { name: "Gris", hex: "#a7a8a6", img: "assets/p-92-nikeauth-gris.webp" },
        { name: "Café", hex: "#a5763a", img: "assets/p-92-nikeauth-cafe.webp" }
      ] },
      { name: "Conjunto Los Angeles Lakers amarillo", meta: "Conjunto NBA de Los Angeles Lakers: camiseta sin mangas amarilla con LAKERS en morado y número 77, y pantaloneta amarilla con franjas moradas.", price: "$55.000", variants: tallasRopa, img: "assets/r-35-lakers77-producto.webp", modelo: "assets/r-35-lakers77-modelo.webp" },
      { name: "Pantalón Adidas Sportswear recto", tipo: "Pantalones", meta: "Pantalón recto en tela liviana con pretina elástica, bolsillos verticales y logo Adidas Sportswear en tono a juego.", price: "$65.000", variants: tallasRopa, img: "assets/p-90-adidassw-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-90-adidassw-negro.webp" },
        { name: "Azul marino", hex: "#1b2338", img: "assets/p-90-adidassw-azul.webp" },
        { name: "Café", hex: "#8a6a30", img: "assets/p-90-adidassw-cafe.webp" },
        { name: "Gris", hex: "#b6b7b0", img: "assets/p-90-adidassw-gris.webp" }
      ] },
      { name: "Conjunto Los Angeles Lakers LakeShow", meta: "Conjunto NBA de Los Angeles Lakers City Edition: camiseta sin mangas en degradado negro a morado con LakeShow en dorado y número 23, y pantaloneta a juego.", price: "$55.000", variants: tallasRopa, img: "assets/r-34-lakers-producto.webp", modelo: "assets/r-34-lakers-modelo.webp" },
      { name: "Conjunto Los Angeles Clippers", meta: "Conjunto NBA de Los Angeles Clippers: camiseta sin mangas azul marino con Clippers en rojo y número 2, y pantaloneta azul marino con pretina roja.", price: "$55.000", variants: tallasRopa, img: "assets/r-33-clippers-producto.webp", modelo: "assets/r-33-clippers-modelo.webp" },
      { name: "Jogger Adidas Tiro tres franjas", tipo: "Pantalones", meta: "Jogger deportivo Adidas Tiro con pretina elástica y cordón, tres franjas laterales, puños elásticos y logo en el muslo.", price: "$65.000", variants: tallasRopa, img: "assets/p-86-adidastiro-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-86-adidastiro-negro.webp" },
        { name: "Beige", hex: "#ded5b3", img: "assets/p-86-adidastiro-beige.webp" }
      ] },
      { name: "Conjunto Golden State Warriors negro", meta: "Conjunto NBA de los Golden State Warriors en negro con letras doradas, número 30 y franja azul diagonal. Pantaloneta negra con WARRIORS en dorado.", price: "$55.000", variants: tallasRopa, img: "assets/r-32-gswblack-producto.webp", modelo: "assets/r-32-gswblack-modelo.webp" },
      { name: "Jogger Nike Sportswear tejido", tipo: "Pantalones", meta: "Jogger en tejido liviano con pretina acanalada y elástico, bolsillos laterales y logo Nike bordado en el muslo.", price: "$65.000", variants: tallasRopa, img: "assets/p-85-nikesw-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-85-nikesw-negro.webp" },
        { name: "Gris", hex: "#9fa1a4", img: "assets/p-85-nikesw-gris.webp" },
        { name: "Verde militar", hex: "#5a6046", img: "assets/p-85-nikesw-verde.webp" },
        { name: "Café", hex: "#8a6a3c", img: "assets/p-85-nikesw-cafe.webp" },
        { name: "Beige", hex: "#cfc3a5", img: "assets/p-85-nikesw-beige.webp" }
      ] },
      { name: "Conjunto Golden State Warriors", meta: "Conjunto NBA de los Golden State Warriors: camiseta sin mangas azul marino con letras doradas y número 30, y pantaloneta azul marino con franjas rojas.", price: "$55.000", variants: tallasRopa, img: "assets/r-31-gsw-producto.webp", modelo: "assets/r-31-gsw-modelo.webp" },
      { name: "Jogger Nike Air Max", tipo: "Pantalones", meta: "Jogger en algodón perchado con pretina elástica, bolsillos laterales, logo Nike Air y etiqueta AIRMAX.", price: "$65.000", variants: tallasRopa, img: "assets/p-84-nikeair-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-84-nikeair-negro.webp" },
        { name: "Verde militar", hex: "#4a4c2c", img: "assets/p-84-nikeair-verde.webp" },
        { name: "Café", hex: "#a9803f", img: "assets/p-84-nikeair-cafe.webp" },
        { name: "Gris", hex: "#9ea1a3", img: "assets/p-84-nikeair-gris.webp" },
        { name: "Hueso", hex: "#c9c8bd", img: "assets/p-84-nikeair-hueso.webp" }
      ] },
      { name: "Conjunto Boston Celtics", meta: "Conjunto NBA de los Boston Celtics: camiseta sin mangas negra con letras verde neón y número 0, y pantaloneta negra a juego.", price: "$55.000", variants: tallasRopa, img: "assets/r-30-celtics-producto.webp", modelo: "assets/r-30-celtics-modelo.webp" },
      { name: "Conjunto Miami Heat City Edition", meta: "Conjunto NBA del Miami Heat: camiseta sin mangas blanca con Miami en rosa y número 13, y pantaloneta blanca con el escudo del equipo.", price: "$55.000", variants: tallasRopa, img: "assets/r-29-heat-producto.webp", modelo: "assets/r-29-heat-modelo.webp" },
      { name: "Bermuda Adidas Sportswear", tipo: "Pantalones", meta: "Bermuda en tela con pretina acanalada y cordón, bolsillos laterales, logo Adidas en relieve y letras Adidas Sportswear.", price: "$65.000", variants: tallasRopa, img: "assets/p-83-adidassport-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-83-adidassport-negro.webp" },
        { name: "Azul marino", hex: "#1f2740", img: "assets/p-83-adidassport-azul.webp" },
        { name: "Verde militar", hex: "#7b8377", img: "assets/p-83-adidassport-verde.webp" },
        { name: "Gris claro", hex: "#b7bab2", img: "assets/p-83-adidassport-gris.webp" },
        { name: "Beige", hex: "#d8ceab", img: "assets/p-83-adidassport-beige.webp" }
      ] },
      { name: "Bermuda Adidas Originals círculo", tipo: "Pantalones", meta: "Bermuda en tela liviana con pretina acanalada y cordón, bolsillos laterales y logo Adidas en círculo estampado.", price: "$65.000", variants: tallasRopa, img: "assets/p-82-adidascirculo-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-82-adidascirculo-negro.webp" },
        { name: "Gris oscuro", hex: "#4c4e4b", img: "assets/p-82-adidascirculo-gris.webp" },
        { name: "Verde salvia", hex: "#7c8a7a", img: "assets/p-82-adidascirculo-salvia.webp" },
        { name: "Beige", hex: "#d9cfa3", img: "assets/p-82-adidascirculo-beige.webp" },
        { name: "Café", hex: "#8d7038", img: "assets/p-82-adidascirculo-cafe.webp" }
      ] },
      { name: "Bermuda Adidas Originals trébol", tipo: "Pantalones", meta: "Bermuda en tela liviana con pretina elástica y cordón, bolsillos laterales y logo trébol Adidas Originals.", price: "$65.000", variants: tallasRopa, img: "assets/p-81-adidastrebol-todas.webp", colors: [
        { name: "Blanca", hex: "#f4f4f3", img: "assets/p-81-adidastrebol-blanca.webp" },
        { name: "Negra", hex: "#141416", img: "assets/p-81-adidastrebol-negra.webp" },
        { name: "Negra logo rojo", hex: "#2a1416", img: "assets/p-81-adidastrebol-negra-roja.webp" },
        { name: "Azul marino", hex: "#1a2033", img: "assets/p-81-adidastrebol-azul.webp" },
        { name: "Verde militar", hex: "#4d5230", img: "assets/p-81-adidastrebol-verde.webp" },
        { name: "Gris salvia", hex: "#a8ada2", img: "assets/p-81-adidastrebol-salvia.webp" }
      ] },
      { name: "Conjunto Arsenal local", meta: "Conjunto del Arsenal: camiseta roja con mangas blancas, escudo bordado y pantaloneta blanca con tres franjas rojas.", price: "$100.000", variants: tallasRopa, img: "assets/r-28-arsenal-producto.webp", modelo: "assets/r-28-arsenal-modelo.webp" },
      { name: "Bermuda Jordan Essentials woven", tipo: "Pantalones", meta: "Bermuda en tela woven con pretina elástica y cordón, ribete blanco lateral, JORDAN en el muslo y Jumpman bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-80-jordanwoven-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-80-jordanwoven-negro.webp" },
        { name: "Rojo", hex: "#b81d2b", img: "assets/p-80-jordanwoven-rojo.webp" },
        { name: "Azul marino", hex: "#1c2740", img: "assets/p-80-jordanwoven-azul.webp" },
        { name: "Gris", hex: "#8e9092", img: "assets/p-80-jordanwoven-gris.webp" },
        { name: "Verde militar", hex: "#7a6a35", img: "assets/p-80-jordanwoven-verde.webp" }
      ] },
      { name: "Conjunto River Plate local", meta: "Conjunto de River Plate: camiseta blanca con banda roja, escudo bordado y pantaloneta negra con tres franjas rojas.", price: "$100.000", variants: tallasRopa, img: "assets/r-27-river-producto.webp", modelo: "assets/r-27-river-modelo.webp" },
      { name: "Bermuda Adidas Originals tres franjas", tipo: "Pantalones", meta: "Bermuda en tela liviana con pretina elástica y cordón, tres franjas laterales y trébol Adidas Originals.", price: "$65.000", variants: tallasRopa, img: "assets/p-79-adidas3s-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-79-adidas3s-negro.webp" },
        { name: "Azul marino", hex: "#1e2a4a", img: "assets/p-79-adidas3s-azul.webp" },
        { name: "Rojo", hex: "#c1121f", img: "assets/p-79-adidas3s-rojo.webp" },
        { name: "Gris", hex: "#9a9c9d", img: "assets/p-79-adidas3s-gris.webp" },
        { name: "Beige", hex: "#d9cda6", img: "assets/p-79-adidas3s-beige.webp" }
      ] },
      { name: "Bermuda Under Armour cierres reflectivos", tipo: "Pantalones", meta: "Bermuda en tela con pretina elástica y cordón, bolsillos con cierres reflectivos y logo UA en el muslo.", price: "$65.000", variants: tallasRopa, img: "assets/p-78-uazip-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-78-uazip-negro.webp" },
        { name: "Azul marino", hex: "#1e2540", img: "assets/p-78-uazip-azul.webp" },
        { name: "Gris oscuro", hex: "#4a4b4d", img: "assets/p-78-uazip-gris-oscuro.webp" },
        { name: "Gris claro", hex: "#b2b3b1", img: "assets/p-78-uazip-gris-claro.webp" },
        { name: "Beige", hex: "#a98a58", img: "assets/p-78-uazip-beige.webp" }
      ] },
      { name: "Bermuda Nike triple Swoosh", tipo: "Pantalones", meta: "Bermuda en tela liviana con pretina elástica y cordón, tres Swoosh estampados en el lateral y recuadro Just Do It.", price: "$65.000", variants: tallasRopa, img: "assets/p-77-nike3swoosh-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-77-nike3swoosh-negro.webp" },
        { name: "Gris oscuro", hex: "#55565a", img: "assets/p-77-nike3swoosh-gris-oscuro.webp" },
        { name: "Gris claro", hex: "#b8b8b4", img: "assets/p-77-nike3swoosh-gris-claro.webp" },
        { name: "Café", hex: "#8b7146", img: "assets/p-77-nike3swoosh-cafe.webp" },
        { name: "Azul marino", hex: "#1b2440", img: "assets/p-77-nike3swoosh-azul.webp" }
      ] },
      { name: "Bermuda Clemont en algodón", tipo: "Pantalones", meta: "Bermuda en algodón con pretina acanalada y cordón, bordado de la C gótica y etiqueta roja lateral.", price: "$55.000", variants: tallasRopa, img: "assets/p-76-clemontsweat-todas.webp", colors: [
        { name: "Hueso", hex: "#e2e0d8", img: "assets/p-76-clemontsweat-hueso.webp" },
        { name: "Beige", hex: "#e6dcc2", img: "assets/p-76-clemontsweat-beige.webp" },
        { name: "Verde militar", hex: "#5c5a3f", img: "assets/p-76-clemontsweat-verde.webp" },
        { name: "Azul marino", hex: "#232b3d", img: "assets/p-76-clemontsweat-azul.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-76-clemontsweat-negro.webp" }
      ] },
      { name: "Bermuda Nike franjas diagonales", tipo: "Pantalones", meta: "Bermuda en tela liviana con pretina elástica y cordón, franjas diagonales contrastadas en los laterales y Swoosh estampado.", price: "$65.000", variants: tallasRopa, img: "assets/p-75-nikefranja-todas.webp", colors: [
        { name: "Gris claro", hex: "#a9a7a1", img: "assets/p-75-nikefranja-gris-claro.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-75-nikefranja-negro.webp" },
        { name: "Gris oscuro", hex: "#5c5d5e", img: "assets/p-75-nikefranja-gris-oscuro.webp" },
        { name: "Azul marino", hex: "#151a28", img: "assets/p-75-nikefranja-azul.webp" },
        { name: "Naranja", hex: "#a8402a", img: "assets/p-75-nikefranja-naranja.webp" }
      ] },
      { name: "Camibuzo sin mangas con capucha", meta: "Camiseta sin mangas con capucha, tejido liviano tipo dry y logo bordado en el pecho.", price: "$50.000", variants: tallasRopa, img: "assets/r-01-todas.webp", colors: [
        { name: "Blanca", hex: "#f7f7f5", img: "assets/r-01-p1-blanca.webp" },
        { name: "Gris", hex: "#7d838a", img: "assets/r-01-p2-gris.webp" },
        { name: "Hueso", hex: "#efeade", img: "assets/r-01-p3-hueso.webp" },
        { name: "Negra", hex: "#141416", img: "assets/r-01-p4-negra.webp" }
      ] },
      { name: "Camibuzo sin mangas con capucha estampado", meta: "Camiseta sin mangas con capucha, tejido dry con estampado degradado y logo en el pecho.", price: "$50.000", variants: tallasRopa, img: "assets/r-02-todas.webp", colors: [
        { name: "Blanca", hex: "#f4f4f3", img: "assets/r-02-p1-blanca.webp" },
        { name: "Gris claro", hex: "#b9bbbd", img: "assets/r-02-p2-gris-claro.webp" },
        { name: "Azul petróleo", hex: "#12496f", img: "assets/r-02-p3-azul.webp" },
        { name: "Gris oscuro", hex: "#5c5f61", img: "assets/r-02-p4-gris-oscuro.webp" }
      ] },
      { name: "Camibuzo sin mangas con capucha degradado", meta: "Camiseta sin mangas con capucha, tejido dry con estampado degradado y logo en el pecho.", price: "$50.000", variants: tallasRopa, img: "assets/r-03-todas.webp", colors: [
        { name: "Azul petróleo", hex: "#14496d", img: "assets/r-03-p1-azul.webp" },
        { name: "Blanca", hex: "#f4f4f3", img: "assets/r-03-p2-blanca.webp" },
        { name: "Gris oscuro", hex: "#5f6063", img: "assets/r-03-p3-gris-oscuro.webp" },
        { name: "Gris claro", hex: "#c3c5c6", img: "assets/r-03-p4-gris-claro.webp" }
      ] },
      { name: "Camibuzo sin mangas Terrex con bolsillo", meta: "Camiseta sin mangas con capucha y bolsillo canguro, logo Terrex en el pecho.", price: "$50.000", variants: tallasRopa, img: "assets/r-04-todas.webp", colors: [
        { name: "Verde", hex: "#20614f", img: "assets/r-04-p1-verde.webp" },
        { name: "Negra", hex: "#141416", img: "assets/r-04-p2-negra.webp" },
        { name: "Blanca", hex: "#f4f4f3", img: "assets/r-04-p3-blanca.webp" },
        { name: "Café", hex: "#9c8168", img: "assets/r-04-p4-cafe.webp" }
      ] },
      { name: "Camibuzo sin mangas con capucha y bolsillo", meta: "Camiseta sin mangas con capucha amplia, bolsillo canguro y logo en el pecho.", price: "$50.000", variants: tallasRopa, img: "assets/r-05-todas.webp", colors: [
        { name: "Verde", hex: "#2d5245", img: "assets/r-05-p1-verde.webp" },
        { name: "Blanca", hex: "#f6f6f5", img: "assets/r-05-p2-blanca.webp" },
        { name: "Negra", hex: "#141416", img: "assets/r-05-p3-negra.webp" },
        { name: "Beige", hex: "#a4906f", img: "assets/r-05-p4-beige.webp" }
      ] },
      { name: "Camibuzo sin mangas Jordan texturizado", meta: "Camiseta sin mangas con capucha en tejido texturizado con estampado en relieve y logo Jumpman en el pecho.", price: "$50.000", variants: tallasRopa, img: "assets/r-08-todas.webp", colors: [
        { name: "Gris", hex: "#9a978f", img: "assets/r-08-p1-gris.webp" },
        { name: "Verde", hex: "#2f4d3f", img: "assets/r-08-p2-verde.webp" },
        { name: "Blanca", hex: "#dedbd6", img: "assets/r-08-p3-blanca.webp" },
        { name: "Beige", hex: "#95815c", img: "assets/r-08-p4-beige.webp" }
      ] },
      { name: "Camiseta Colombia retro 1990", meta: "Camiseta retro de la Selección Colombia en amarillo, con escudo bordado y número 10 en la espalda.", price: "$45.000", variants: tallasRopa, img: "assets/r-06-frente.webp", modelo: "assets/r-06-espalda.webp", fotos: ["assets/r-06-modelo.webp"] },
      { name: "Camiseta Colombia estampado floral", meta: "Camiseta de la Selección Colombia en amarillo con estampado floral en relieve, franjas rojas en los hombros y ribetes azules.", price: "$45.000", variants: tallasRopa, img: "assets/r-07-frente.webp", modelo: "assets/r-07-modelo.webp" },
      { name: "Camiseta polo Colombia Adidas", meta: "Camiseta polo de la Selección Colombia en azul marino con cuello y broche, franjas rojas en los hombros, paneles amarillos y azules, escudo bordado y logo Adidas. Tejido Aeroready.", price: "$45.000", variants: tallasRopa, img: "assets/r-36-colombia-polo-frente.webp", modelo: "assets/r-36-colombia-polo-modelo.webp" },
      { name: "Camiseta sin mangas oversize estampada", meta: "Camiseta sin mangas oversize en tejido lavado con textura, logo en el pecho y estampado grande en la espalda.", price: "$65.000", variants: tallasRopa, img: "assets/c-09-todas-frente.webp", modelo: "assets/c-09-todas-espalda.webp", colors: [
        { name: "Y/OUT azul marino", hex: "#2f333a", img: "assets/c-09-yout-azul.webp" },
        { name: "Clemont blanca", hex: "#eae5da", img: "assets/c-09-clemont-blanca.webp" },
        { name: "Hellstar café", hex: "#7d4a30", img: "assets/c-09-hellstar-cafe.webp" },
        { name: "Y/OUT verde oliva", hex: "#7b7040", img: "assets/c-09-yout-verde.webp" }
      ] },
      { name: "Camiseta sin mangas Colombia 2024", meta: "Camiseta sin mangas de la Selección Colombia en blanco, con franjas rojas en los hombros, paneles amarillos y azules, escudo bordado y tejido Aeroready.", price: "$45.000", variants: tallasRopa, img: "assets/c-10-colombia-frente.webp", modelo: "assets/c-10-colombia-modelo.webp" },
      { name: "Camiseta sin mangas Hellstar Sports", meta: "Camiseta sin mangas en verde militar lavado, con estampado Hellstar Sports en el pecho y logo circular grande en la espalda.", price: "$65.000", variants: tallasRopa, img: "assets/c-11-hellstar-frente.webp", modelo: "assets/c-11-hellstar-espalda.webp", fotos: ["assets/c-11-hellstar-modelo.webp"] },
      { name: "Camiseta sin mangas Napkin Flyplans", meta: "Camiseta sin mangas en beige, con logo Napkin Flyplans en el pecho y estampado circular grande en la espalda.", price: "$65.000", variants: tallasRopa, img: "assets/c-12-napking-frente.webp", modelo: "assets/c-12-napking-espalda.webp", fotos: ["assets/c-12-napking-modelo.webp"] },
      { name: "Short ciclista Under Armour", tipo: "Pantalones", meta: "Short ciclista de tiro alto con bolsillos laterales, tejido elástico de secado rápido y logo en la pretina.", price: "$45.000", variants: tallasRopa, img: "assets/p-01-ua-todas.webp", colors: [
        { name: "Negro", hex: "#151517", img: "assets/p-01-ua-negro.webp" },
        { name: "Azul marino", hex: "#232c4b", img: "assets/p-01-ua-azul-marino.webp" },
        { name: "Gris oscuro", hex: "#4f4c56", img: "assets/p-01-ua-gris-oscuro.webp" },
        { name: "Gris claro", hex: "#a8aaad", img: "assets/p-01-ua-gris-claro.webp" },
        { name: "Café", hex: "#5c3220", img: "assets/p-01-ua-cafe.webp" },
        { name: "Vino", hex: "#8f1a26", img: "assets/p-01-ua-vino.webp" },
        { name: "Morado", hex: "#4b2a86", img: "assets/p-01-ua-morado.webp" },
        { name: "Rosa palo", hex: "#c99287", img: "assets/p-01-ua-rosa-palo.webp" },
        { name: "Fucsia", hex: "#f01e9a", img: "assets/p-01-ua-fucsia.webp" },
        { name: "Verde lima", hex: "#c2d92c", img: "assets/p-01-ua-verde-lima.webp" }
      ] },
      { name: "Short ciclista Adidas", tipo: "Pantalones", meta: "Short ciclista de tiro alto con bolsillos laterales, tejido elástico y logo Adidas en la pretina.", price: "$45.000", variants: tallasRopa, img: "assets/p-02-adidas-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-02-adidas-negro.webp" },
        { name: "Blanco", hex: "#f2f2f0", img: "assets/p-02-adidas-blanco.webp" },
        { name: "Azul marino", hex: "#1f2748", img: "assets/p-02-adidas-azul-marino.webp" },
        { name: "Verde oliva", hex: "#4d5433", img: "assets/p-02-adidas-verde-oliva.webp" },
        { name: "Café", hex: "#5a3220", img: "assets/p-02-adidas-cafe.webp" },
        { name: "Vino", hex: "#8e1725", img: "assets/p-02-adidas-vino.webp" },
        { name: "Lila", hex: "#a08fa0", img: "assets/p-02-adidas-lila.webp" },
        { name: "Rosa palo", hex: "#d59d92", img: "assets/p-02-adidas-rosa-palo.webp" },
        { name: "Fucsia", hex: "#f21b9c", img: "assets/p-02-adidas-fucsia.webp" },
        { name: "Verde lima", hex: "#a8f01c", img: "assets/p-02-adidas-verde-lima.webp" }
      ] },
      { name: "Short ciclista Nike", tipo: "Pantalones", meta: "Short ciclista de tiro alto con bolsillos laterales, tejido Dri-FIT elástico y Swoosh en la pretina.", price: "$45.000", variants: tallasRopa, img: "assets/p-03-nike-todas.webp", colors: [
        { name: "Negro", hex: "#161618", img: "assets/p-03-nike-negro.webp" },
        { name: "Blanco", hex: "#f0f0ee", img: "assets/p-03-nike-blanco.webp" },
        { name: "Gris", hex: "#5c5c62", img: "assets/p-03-nike-gris.webp" },
        { name: "Azul marino", hex: "#25315e", img: "assets/p-03-nike-azul-marino.webp" },
        { name: "Verde oliva", hex: "#5b6236", img: "assets/p-03-nike-verde-oliva.webp" },
        { name: "Café", hex: "#5d3520", img: "assets/p-03-nike-cafe.webp" },
        { name: "Vino", hex: "#7f1d29", img: "assets/p-03-nike-vino.webp" },
        { name: "Lila", hex: "#a98fa4", img: "assets/p-03-nike-lila.webp" },
        { name: "Rosa palo", hex: "#efa598", img: "assets/p-03-nike-rosa-palo.webp" },
        { name: "Fucsia", hex: "#f5199c", img: "assets/p-03-nike-fucsia.webp" },
        { name: "Verde lima", hex: "#b6ef26", img: "assets/p-03-nike-verde-lima.webp" }
      ] },
      { name: "Short ciclista Alo", tipo: "Pantalones", meta: "Short ciclista de tiro alto con bolsillos laterales, tejido suave de compresión ligera y logo Alo en la pretina.", price: "$45.000", variants: tallasRopa, img: "assets/p-04-alo-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-04-alo-negro.webp" },
        { name: "Blanco", hex: "#f1f1ef", img: "assets/p-04-alo-blanco.webp" },
        { name: "Gris", hex: "#6d6c78", img: "assets/p-04-alo-gris.webp" },
        { name: "Azul marino", hex: "#20305e", img: "assets/p-04-alo-azul-marino.webp" },
        { name: "Verde oliva", hex: "#4e5535", img: "assets/p-04-alo-verde-oliva.webp" },
        { name: "Café", hex: "#6b4227", img: "assets/p-04-alo-cafe.webp" },
        { name: "Vino", hex: "#8c1526", img: "assets/p-04-alo-vino.webp" },
        { name: "Lila", hex: "#ab8fb0", img: "assets/p-04-alo-lila.webp" },
        { name: "Rosa palo", hex: "#e2a196", img: "assets/p-04-alo-rosa-palo.webp" },
        { name: "Fucsia", hex: "#f5199c", img: "assets/p-04-alo-fucsia.webp" },
        { name: "Verde lima", hex: "#c3e929", img: "assets/p-04-alo-verde-lima.webp" }
      ] },
      { name: "Pantaloneta Adidas 2 en 1", tipo: "Pantalones", meta: "Pantaloneta deportiva con licra interna, paneles en contraste y pretina elástica con logo Adidas.", price: "$65.000", variants: tallasRopa, img: "assets/p-05-adidas-todas.webp", colors: [
        { name: "Gris", hex: "#4a5257", img: "assets/p-05-adidas-gris.webp" },
        { name: "Negro", hex: "#151517", img: "assets/p-05-adidas-negro.webp" },
        { name: "Azul marino", hex: "#1e2748", img: "assets/p-05-adidas-azul.webp" }
      ] },
      { name: "Pantaloneta Adidas chevron 2 en 1", tipo: "Pantalones", meta: "Pantaloneta deportiva con licra interna, pretina con cordón, bolsillos laterales y chevrones reflectivos.", price: "$65.000", variants: tallasRopa, img: "assets/p-06-adidas-todas.webp", colors: [
        { name: "Azul", hex: "#6b8ccc", img: "assets/p-06-adidas-azul.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-06-adidas-negro.webp" },
        { name: "Beige", hex: "#c39a72", img: "assets/p-06-adidas-beige.webp" }
      ] },
      { name: "Jogger Adidas Originals 3 franjas", tipo: "Pantalones", meta: "Jogger en algodón con tres franjas laterales, trébol bordado, pretina elástica y puños ajustados.", price: "$65.000", variants: tallasRopa, img: "assets/p-37-adidas3f-todas.webp", colors: [
        { name: "Azul marino", hex: "#1c2440", img: "assets/p-37-adidas3f-azul.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-37-adidas3f-negro.webp" },
        { name: "Hueso", hex: "#e4d7c1", img: "assets/p-37-adidas3f-hueso.webp" },
        { name: "Blanco", hex: "#f4f4f3", img: "assets/p-37-adidas3f-blanco.webp" },
        { name: "Verde militar", hex: "#4a5347", img: "assets/p-38-adidas-short-verde.webp" }
      ] },
      { name: "Jogger Nike Swoosh Beaverton", tipo: "Pantalones", meta: "Jogger deportivo con Swoosh y texto Beaverton estampado, bolsillos con vivo y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-39-nike-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-39-nike-negro.webp" },
        { name: "Verde militar", hex: "#4d5334", img: "assets/p-39-nike-verde.webp" },
        { name: "Gris", hex: "#9a9c9e", img: "assets/p-39-nike-gris.webp" },
        { name: "Azul marino", hex: "#1b2436", img: "assets/p-39-nike-azul.webp" },
        { name: "Beige", hex: "#b3ab8c", img: "assets/p-39-nike-beige.webp" }
      ] },
      { name: "Jogger Adidas Aeroready con cierres", tipo: "Pantalones", meta: "Jogger deportivo Aeroready con bolsillos de cierre impermeable, paneles en la rodilla y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-40-aeroready-todas.webp", colors: [
        { name: "Azul marino", hex: "#1c2436", img: "assets/p-40-aeroready-azul.webp" },
        { name: "Verde oscuro", hex: "#3b3d35", img: "assets/p-40-aeroready-verde-oscuro.webp" },
        { name: "Verde claro", hex: "#9aa08a", img: "assets/p-40-aeroready-verde-claro.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-40-aeroready-negro.webp" },
        { name: "Gris", hex: "#a8abae", img: "assets/p-40-aeroready-gris.webp" }
      ] },
      { name: "Jogger cargo con monograma", tipo: "Pantalones", meta: "Jogger cargo en tela liviana con bolsillos de parche, monograma bordado, pretina con cordón y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-41-cargo-todas.webp", colors: [
        { name: "Azul gris", hex: "#5c7180", img: "assets/p-41-cargo-azul-gris.webp" },
        { name: "Beige", hex: "#b9977a", img: "assets/p-41-cargo-beige.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-41-cargo-negro.webp" },
        { name: "Verde", hex: "#2f6149", img: "assets/p-41-cargo-verde.webp" }
      ] },
      { name: "Jogger cargo Nike Air Max", tipo: "Pantalones", meta: "Jogger cargo en tela liviana con bolsillos de parche con cierre, etiqueta Air Max, pretina con cordón y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-42-airmax-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-42-airmax-negro.webp" },
        { name: "Verde", hex: "#2c5347", img: "assets/p-42-airmax-verde.webp" },
        { name: "Café", hex: "#9d7c42", img: "assets/p-42-airmax-cafe.webp" },
        { name: "Gris", hex: "#5f6b6b", img: "assets/p-42-airmax-gris.webp" }
      ] },
      { name: "Jogger cargo Nike Swoosh", tipo: "Pantalones", meta: "Jogger cargo en tela liviana con bolsillos de parche, Swoosh bordado en los muslos, pretina con cordón y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-43-nikecargo-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-43-nikecargo-negro.webp" },
        { name: "Azul", hex: "#3f5f9c", img: "assets/p-43-nikecargo-azul.webp" },
        { name: "Hueso", hex: "#b8b89f", img: "assets/p-43-nikecargo-hueso.webp" },
        { name: "Gris", hex: "#6f7674", img: "assets/p-43-nikecargo-gris.webp" }
      ] },
      { name: "Jogger cargo Adidas nylon", tipo: "Pantalones", meta: "Jogger cargo en nylon liviano con bolsillos de parche, tres franjas en relieve, pretina con cordón y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-44-adidascargo-todas.webp", colors: [
        { name: "Azul", hex: "#5a6b8c", img: "assets/p-44-adidascargo-azul.webp" },
        { name: "Verde", hex: "#33553f", img: "assets/p-44-adidascargo-verde.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-44-adidascargo-negro.webp" },
        { name: "Beige", hex: "#a99772", img: "assets/p-44-adidascargo-beige.webp" }
      ] },
      { name: "Jogger cargo Adidas logo lateral", tipo: "Pantalones", meta: "Jogger cargo en tela liviana con bolsillos de parche, logo Adidas en el muslo, pretina con cordón y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-45-adicargo-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-45-adicargo-negro.webp" },
        { name: "Verde", hex: "#2f5145", img: "assets/p-45-adicargo-verde.webp" },
        { name: "Beige", hex: "#a89272", img: "assets/p-45-adicargo-beige.webp" },
        { name: "Gris", hex: "#9ea0a2", img: "assets/p-45-adicargo-gris.webp" }
      ] },
      { name: "Pantaloneta Adidas Aeroready con cierres", tipo: "Pantalones", meta: "Pantaloneta deportiva Aeroready con bolsillos de cierre impermeable, cintas Adidas y pretina con cordón.", price: "$65.000", variants: tallasRopa, img: "assets/p-46-aeroshort-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-46-aeroshort-negro.webp" },
        { name: "Azul marino", hex: "#1c2b5c", img: "assets/p-46-aeroshort-azul.webp" },
        { name: "Verde gris", hex: "#4d605f", img: "assets/p-46-aeroshort-verde.webp" }
      ] },
      { name: "Pantaloneta Adidas paneles con cierres", tipo: "Pantalones", meta: "Pantaloneta deportiva en nylon liviano con bolsillos de cierre, paneles en diagonal, detalles reflectivos y pretina con cordón.", price: "$65.000", variants: tallasRopa, img: "assets/p-47-adishort-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-47-adishort-negro.webp" },
        { name: "Azul marino", hex: "#293556", img: "assets/p-47-adishort-azul.webp" },
        { name: "Verde", hex: "#7ea173", img: "assets/p-47-adishort-verde.webp" }
      ] },
      { name: "Jogger cargo Essentials", tipo: "Pantalones", meta: "Jogger cargo con logo Essentials en el muslo, bolsillo de cierre contrastado, bolsillos de parche y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-48-essentials-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-48-essentials-negro.webp" },
        { name: "Verde salvia", hex: "#a3a98d", img: "assets/p-48-essentials-salvia.webp" },
        { name: "Azul", hex: "#4c669b", img: "assets/p-48-essentials-azul.webp" },
        { name: "Beige", hex: "#b4ab84", img: "assets/p-48-essentials-beige.webp" }
      ] },
      { name: "Pantaloneta cargo Adidas", tipo: "Pantalones", meta: "Pantaloneta cargo en tela liviana con bolsillos de parche con tapa, logo Adidas y pretina con cordón.", price: "$65.000", variants: tallasRopa, img: "assets/p-49-adicargoshort-todas.webp", colors: [
        { name: "Café", hex: "#8b5f3c", img: "assets/p-49-adicargoshort-cafe.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-49-adicargoshort-negro.webp" },
        { name: "Gris", hex: "#75797c", img: "assets/p-49-adicargoshort-gris.webp" }
      ] },
      { name: "Jogger cargo Nike placa retro", tipo: "Pantalones", meta: "Jogger cargo en tela liviana con bolsillos de parche grandes, placa Nike retro en relieve y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-50-nikeplaca-todas.webp", colors: [
        { name: "Gris claro", hex: "#a6a8a7", img: "assets/p-50-nikeplaca-gris-claro.webp" },
        { name: "Gris oscuro", hex: "#55595c", img: "assets/p-50-nikeplaca-gris-oscuro.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-50-nikeplaca-negro.webp" },
        { name: "Beige", hex: "#c2a678", img: "assets/p-50-nikeplaca-beige.webp" }
      ] },
      { name: "Pantaloneta Nike ripstop", tipo: "Pantalones", meta: "Pantaloneta en tela ripstop de cuadros con bolsillos laterales, aberturas en el ruedo y pretina con cordón.", price: "$65.000", variants: tallasRopa, img: "assets/p-51-ripstop-todas.webp", colors: [
        { name: "Beige", hex: "#cfc4ad", img: "assets/p-51-ripstop-beige.webp" },
        { name: "Azul", hex: "#1e4462", img: "assets/p-51-ripstop-azul.webp" },
        { name: "Gris oscuro", hex: "#4a4c4e", img: "assets/p-51-ripstop-gris.webp" },
        { name: "Negro", hex: "#1a1a1c", img: "assets/p-51-ripstop-negro.webp" }
      ] },
      { name: "Jogger cargo Nike con anillos", tipo: "Pantalones", meta: "Jogger cargo en tela liviana con bolsillos de cierre y tiradores de anillo, Swoosh en el muslo y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-52-nikeanillo-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-52-nikeanillo-negro.webp" },
        { name: "Beige", hex: "#b09a75", img: "assets/p-52-nikeanillo-beige.webp" },
        { name: "Verde", hex: "#8b9483", img: "assets/p-52-nikeanillo-verde.webp" },
        { name: "Azul", hex: "#5a6c8c", img: "assets/p-52-nikeanillo-azul.webp" }
      ] },
      { name: "Pantaloneta Adidas Terrex ripstop", tipo: "Pantalones", meta: "Pantaloneta en tela ripstop de cuadros con logo Terrex vertical, bolsillos laterales y pretina con cordón.", price: "$65.000", variants: tallasRopa, img: "assets/p-53-terrexshort-todas.webp", colors: [
        { name: "Azul petróleo", hex: "#1d4a68", img: "assets/p-53-terrexshort-azul.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-53-terrexshort-negro.webp" },
        { name: "Verde gris", hex: "#7f8672", img: "assets/p-53-terrexshort-verde.webp" }
      ] },
      { name: "Jogger cargo Clemont", tipo: "Pantalones", meta: "Jogger cargo con doble bolsillo de parche, parches rojos Clemont bordados y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-54-clemont-todas.webp", colors: [
        { name: "Verde oliva", hex: "#6b7358", img: "assets/p-54-clemont-verde.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-54-clemont-negro.webp" },
        { name: "Gris", hex: "#9ba0a0", img: "assets/p-54-clemont-gris.webp" },
        { name: "Azul gris", hex: "#4e5a6b", img: "assets/p-54-clemont-azul.webp" }
      ] },
      { name: "Jogger cargo Amiri", tipo: "Pantalones", meta: "Jogger cargo con bolsillos de parche grandes, logo Amiri bordado y puños elásticos.", price: "$65.000", variants: tallasRopa, img: "assets/p-55-amiri-todas.webp", colors: [
        { name: "Verde", hex: "#2d5245", img: "assets/p-55-amiri-verde.webp" },
        { name: "Café", hex: "#a97e4c", img: "assets/p-55-amiri-cafe.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-55-amiri-negro.webp" }
      ] },
      { name: "Pantaloneta Nike Pro", tipo: "Pantalones", meta: "Pantaloneta deportiva en tela satinada con bolsillos laterales, Swoosh bordado y pretina con cordón.", price: "$65.000", variants: tallasRopa, img: "assets/p-56-nikepro-todas.webp", colors: [
        { name: "Vino", hex: "#94473a", img: "assets/p-56-nikepro-vino.webp" },
        { name: "Verde militar", hex: "#7e7455", img: "assets/p-56-nikepro-verde.webp" },
        { name: "Gris oscuro", hex: "#4c5052", img: "assets/p-56-nikepro-gris.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-56-nikepro-negro.webp" }
      ] },
      { name: "Pantaloneta Adidas logo cuadro", tipo: "Pantalones", meta: "Pantaloneta en tela liviana con bolsillos laterales, parche cuadrado Adidas y pretina con cordón.", price: "$65.000", variants: tallasRopa, img: "assets/p-57-adicuadro-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-57-adicuadro-negro.webp" },
        { name: "Verde militar", hex: "#3f4534", img: "assets/p-57-adicuadro-verde.webp" },
        { name: "Mostaza", hex: "#a5761a", img: "assets/p-57-adicuadro-mostaza.webp" },
        { name: "Gris", hex: "#82858a", img: "assets/p-57-adicuadro-gris.webp" }
      ] },
      { name: "Pantaloneta Amiri", tipo: "Pantalones", meta: "Pantaloneta en algodón con pretina elástica, cordón y logo Amiri estampado en la pierna.", price: "$65.000", variants: tallasRopa, img: "assets/p-58-amirishort-todas.webp", colors: [
        { name: "Beige", hex: "#c9bfa4", img: "assets/p-58-amirishort-beige.webp" },
        { name: "Gris", hex: "#8b8d87", img: "assets/p-58-amirishort-gris.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-58-amirishort-negro.webp" },
        { name: "Azul marino", hex: "#1c2536", img: "assets/p-58-amirishort-azul.webp" }
      ] },
      { name: "Pantalón Nike Air con vivos", tipo: "Pantalones", meta: "Pantalón de nylon liviano con vivos reflectivos, logo Nike Air y cordón ajustable en el tobillo.", price: "$65.000", variants: tallasRopa, img: "assets/p-60-nikeair-todas.webp", colors: [
        { name: "Azul marino", hex: "#1c2740", img: "assets/p-60-nikeair-azul.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-60-nikeair-negro.webp" },
        { name: "Verde militar", hex: "#7c8a70", img: "assets/p-60-nikeair-verde.webp" }
      ] },
      { name: "Pantaloneta Puma Porsche", tipo: "Pantalones", meta: "Pantaloneta en tela liviana con pretina con cordón, bolsillos laterales, escudo Porsche y logo Puma.", price: "$65.000", variants: tallasRopa, img: "assets/p-61-porsche-todas.webp", colors: [
        { name: "Verde militar", hex: "#4a5230", img: "assets/p-61-porsche-verde.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-61-porsche-negro.webp" },
        { name: "Gris", hex: "#93989b", img: "assets/p-61-porsche-gris.webp" },
        { name: "Gris claro", hex: "#b6bbbd", img: "assets/p-61-porsche-gris-claro.webp" },
        { name: "Hueso", hex: "#cfccc2", img: "assets/p-61-porsche-hueso.webp" }
      ] },
      { name: "Bermuda Jordan con franjas", tipo: "Pantalones", meta: "Bermuda larga en tela liviana con pretina elástica y cordón, letras JORDAN en el lateral, logo Jumpman y franjas en el ruedo.", price: "$65.000", variants: tallasRopa, img: "assets/p-62-jordanbermuda-todas.webp", colors: [
        { name: "Café", hex: "#7d6538", img: "assets/p-62-jordanbermuda-cafe.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-62-jordanbermuda-negro.webp" },
        { name: "Gris", hex: "#6d6f71", img: "assets/p-62-jordanbermuda-gris.webp" },
        { name: "Azul marino", hex: "#1a2233", img: "assets/p-62-jordanbermuda-azul.webp" },
        { name: "Hueso", hex: "#cfcdc0", img: "assets/p-62-jordanbermuda-hueso.webp" }
      ] },
      { name: "Bermuda Nike en algodón", tipo: "Pantalones", meta: "Bermuda en algodón con pretina elástica acanalada y cordón, bolsillos laterales y logo Nike estampado.", price: "$55.000", variants: tallasRopa, img: "assets/p-63-nikealgodon-todas.webp", colors: [
        { name: "Verde militar", hex: "#6b5a2c", img: "assets/p-63-nikealgodon-verde.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-63-nikealgodon-negro.webp" },
        { name: "Café", hex: "#b78c52", img: "assets/p-63-nikealgodon-cafe.webp" },
        { name: "Hueso", hex: "#ddd6c2", img: "assets/p-63-nikealgodon-hueso.webp" }
      ] },
      { name: "Jogger cargo Jordan 23", tipo: "Pantalones", meta: "Jogger cargo con pretina elástica y cordón, bolsillos de parche laterales, número 23 y logos Jumpman en la pierna.", price: "$65.000", variants: tallasRopa, img: "assets/p-69-jordan23-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-69-jordan23-negro.webp" },
        { name: "Azul gris", hex: "#5c6a86", img: "assets/p-69-jordan23-azul.webp" },
        { name: "Beige", hex: "#b5ac97", img: "assets/p-69-jordan23-beige.webp" }
      ] },
      { name: "Bermuda Nike Swoosh en felpa", tipo: "Pantalones", meta: "Bermuda en felpa de algodón con pretina acanalada y cordón, bolsillos ribeteados y Swoosh con letras verticales.", price: "$65.000", variants: tallasRopa, img: "assets/p-70-nikefelpa-todas.webp", colors: [
        { name: "Azul marino", hex: "#1e2740", img: "assets/p-70-nikefelpa-azul.webp" },
        { name: "Gris", hex: "#c2c3c5", img: "assets/p-70-nikefelpa-gris.webp" },
        { name: "Verde militar", hex: "#6b6636", img: "assets/p-70-nikefelpa-verde.webp" }
      ] },
      { name: "Bermuda Clemont gótica", tipo: "Pantalones", meta: "Bermuda en algodón con pretina acanalada y cordón, bordado Clemont en letra gótica y etiqueta roja.", price: "$65.000", variants: tallasRopa, img: "assets/p-72-clemont-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-72-clemont-negro.webp" },
        { name: "Blanco", hex: "#f2f3f5", img: "assets/p-72-clemont-blanco.webp" },
        { name: "Gris claro", hex: "#c8c9cb", img: "assets/p-72-clemont-gris-claro.webp" },
        { name: "Gris oscuro", hex: "#5b5c5e", img: "assets/p-72-clemont-gris-oscuro.webp" }
      ] },
      { name: "Pantaloneta Adidas cargo 2 en 1", tipo: "Pantalones", meta: "Pantaloneta deportiva con licra interna, bolsillos cargo laterales y detalles reflectivos.", price: "$65.000", variants: tallasRopa, img: "assets/p-07-adidas-todas.webp", colors: [
        { name: "Gris", hex: "#a9a7a2", img: "assets/p-07-adidas-gris.webp" },
        { name: "Verde militar", hex: "#4f5544", img: "assets/p-07-adidas-verde.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-07-adidas-negro.webp" }
      ] },
      { name: "Pantaloneta Adidas cierre lateral 2 en 1", tipo: "Pantalones", meta: "Pantaloneta deportiva con licra interna, bolsillos con cierre y pretina con cordón.", price: "$65.000", variants: tallasRopa, img: "assets/p-08-adidas-todas.webp", colors: [
        { name: "Beige", hex: "#c8a77c", img: "assets/p-08-adidas-beige.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-08-adidas-negro.webp" },
        { name: "Gris", hex: "#8f939c", img: "assets/p-08-adidas-gris.webp" }
      ] },
      { name: "Pantaloneta Nike Dri-FIT 2 en 1", tipo: "Pantalones", meta: "Pantaloneta Dri-FIT con licra interna, bolsillos laterales y Swoosh bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-09-nike-todas.webp", colors: [
        { name: "Verde oliva", hex: "#9a8f4e", img: "assets/p-09-nike-verde.webp" },
        { name: "Vino", hex: "#6b4a55", img: "assets/p-09-nike-vino.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-09-nike-negro.webp" }
      ] },
      { name: "Pantaloneta Nike chevron 2 en 1", tipo: "Pantalones", meta: "Pantaloneta deportiva con licra interna, chevrones reflectivos en los costados y Swoosh bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-10-nike-todas.webp", colors: [
        { name: "Beige", hex: "#c9a684", img: "assets/p-10-nike-beige.webp" },
        { name: "Azul", hex: "#4b7dc0", img: "assets/p-10-nike-azul.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-10-nike-negro.webp" }
      ] },
      { name: "Pantaloneta Nike bolsillos con cierre", tipo: "Pantalones", meta: "Pantaloneta deportiva con bolsillos de cierre, aberturas laterales y Swoosh bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-18-nike-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-18-nike-negro.webp" },
        { name: "Verde", hex: "#82a878", img: "assets/p-18-nike-verde.webp" },
        { name: "Azul marino", hex: "#22304f", img: "assets/p-18-nike-azul.webp" }
      ] },
      { name: "Pantaloneta Nike Pro cierre reflectivo", tipo: "Pantalones", meta: "Pantaloneta deportiva con bolsillos de cierre reflectivo, aberturas laterales y Swoosh bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-19-nike-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-19-nike-negro.webp" },
        { name: "Café", hex: "#8b6b3f", img: "assets/p-19-nike-cafe.webp" },
        { name: "Blanco", hex: "#e8e8e6", img: "assets/p-19-nike-blanco.webp" }
      ] },
      { name: "Pantaloneta Under Armour cargo", tipo: "Pantalones", meta: "Pantaloneta deportiva con bolsillos cargo, pretina con cordón y logo Under Armour.", price: "$65.000", variants: tallasRopa, img: "assets/p-20-ua-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-20-ua-negro.webp" },
        { name: "Gris", hex: "#7b7f83", img: "assets/p-20-ua-gris.webp" },
        { name: "Verde militar", hex: "#6d6b34", img: "assets/p-20-ua-verde.webp" }
      ] },
      { name: "Pantalón Jordan con cierre en el tobillo", tipo: "Pantalones", meta: "Pantalón deportivo en tela liviana con pretina elástica, cierres en los tobillos y logo Jumpman bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-21-jordan-todas.webp", colors: [
        { name: "Hueso", hex: "#cfcbc2", img: "assets/p-21-jordan-hueso.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-21-jordan-negro.webp" },
        { name: "Azul marino", hex: "#1e2a44", img: "assets/p-21-jordan-azul.webp" }
      ] },
      { name: "Pantaloneta Nike cargo bolsillo lateral", tipo: "Pantalones", meta: "Pantaloneta deportiva en tela liviana con bolsillos cargo laterales, pretina con cordón y Swoosh bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-22-nike-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-22-nike-negro.webp" },
        { name: "Gris", hex: "#71767c", img: "assets/p-22-nike-gris.webp" },
        { name: "Café", hex: "#8a5f36", img: "assets/p-22-nike-cafe.webp" }
      ] },
      { name: "Pantalón Adidas tres franjas con cierre", tipo: "Pantalones", meta: "Pantalón deportivo en tela liviana con tres franjas en las piernas, cierres en los tobillos y pretina elástica.", price: "$65.000", variants: tallasRopa, img: "assets/p-23-adidas-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-23-adidas-negro.webp" },
        { name: "Azul marino", hex: "#1f2947", img: "assets/p-23-adidas-azul.webp" },
        { name: "Azul petróleo", hex: "#4c6672", img: "assets/p-23-adidas-petroleo.webp" },
        { name: "Hueso", hex: "#cfcdc6", img: "assets/p-23-adidas-hueso.webp" }
      ] },
      { name: "Pantaloneta Adidas franjas reflectivas", tipo: "Pantalones", meta: "Pantaloneta deportiva en tela liviana con franjas reflectivas laterales, pretina con cordón y logo Adidas.", price: "$65.000", variants: tallasRopa, img: "assets/p-24-adidas-todas.webp", colors: [
        { name: "Beige", hex: "#b3a396", img: "assets/p-24-adidas-beige.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-24-adidas-negro.webp" },
        { name: "Azul claro", hex: "#9db2c9", img: "assets/p-24-adidas-azul.webp" }
      ] },
      { name: "Pantaloneta Nike cargo con cierre", tipo: "Pantalones", meta: "Pantaloneta deportiva amplia con bolsillos cargo, bolsillo de cierre lateral y Swoosh bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-25-nike-todas.webp", colors: [
        { name: "Mostaza", hex: "#8d7524", img: "assets/p-25-nike-mostaza.webp" },
        { name: "Gris", hex: "#78797b", img: "assets/p-25-nike-gris.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-25-nike-negro.webp" }
      ] },
      { name: "Pantalón Adidas tres franjas con cierre lateral", tipo: "Pantalones", meta: "Pantalón deportivo en tela liviana con tres franjas en la pierna, cierres en los tobillos y pretina elástica.", price: "$65.000", variants: tallasRopa, img: "assets/p-26-adidas-todas.webp", colors: [
        { name: "Azul marino", hex: "#1e2740", img: "assets/p-26-adidas-azul.webp" },
        { name: "Azul oscuro", hex: "#232c46", img: "assets/p-26-adidas-azul2.webp" },
        { name: "Café", hex: "#a4794c", img: "assets/p-26-adidas-cafe.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-26-adidas-negro.webp" }
      ] },
      { name: "Pantalón Nike Swoosh franja lateral", tipo: "Pantalones", meta: "Pantalón deportivo en tela liviana con franja lateral, cierres en los tobillos y Swoosh bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-27-nike-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-27-nike-negro.webp" },
        { name: "Azul marino", hex: "#1d2540", img: "assets/p-27-nike-azul.webp" },
        { name: "Gris", hex: "#a8adb4", img: "assets/p-27-nike-gris.webp" }
      ] },
      { name: "Pantalón Adidas franjas diagonales", tipo: "Pantalones", meta: "Pantalón deportivo con franjas diagonales en la pierna, bolsillos con cierre y pretina elástica.", price: "$65.000", variants: tallasRopa, img: "assets/p-28-adidas-todas.webp", colors: [
        { name: "Negro", hex: "#141416", img: "assets/p-28-adidas-negro.webp" },
        { name: "Azul marino", hex: "#1d2542", img: "assets/p-28-adidas-azul.webp" },
        { name: "Gris oscuro", hex: "#575b60", img: "assets/p-28-adidas-gris.webp" }
      ] },
      { name: "Pantalón Nike Dri-FIT liviano", tipo: "Pantalones", meta: "Pantalón deportivo Dri-FIT con bolsillos de cierre, cierres en los tobillos y Swoosh bordado.", price: "$65.000", variants: tallasRopa, img: "assets/p-29-nike-todas.webp", colors: [
        { name: "Gris oscuro", hex: "#4d5257", img: "assets/p-29-nike-gris.webp" },
        { name: "Azul marino", hex: "#1b2136", img: "assets/p-29-nike-azul-marino.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-29-nike-negro.webp" },
        { name: "Azul petróleo", hex: "#1d5570", img: "assets/p-29-nike-azul.webp" }
      ] },
      { name: "Pantalón Adidas Originals tres franjas", tipo: "Pantalones", meta: "Pantalón deportivo Originals con tres franjas laterales, trébol bordado y cierres en los tobillos.", price: "$65.000", variants: tallasRopa, img: "assets/p-30-adidas-todas.webp", colors: [
        { name: "Azul marino", hex: "#1d2440", img: "assets/p-30-adidas-azul.webp" },
        { name: "Negro", hex: "#141416", img: "assets/p-30-adidas-negro.webp" },
        { name: "Negro franjas anchas", hex: "#1c1c1e", img: "assets/p-30-adidas-negro2.webp" },
        { name: "Gris", hex: "#a9adb4", img: "assets/p-30-adidas-gris.webp" }
      ] },
      { name: "Conjunto Atlético de Madrid 2024 local", meta: "Conjunto del Atlético de Madrid con camiseta a rayas rojiblancas y pantaloneta azul. Escudo y patrocinadores bordados.", price: "$100.000", variants: tallasRopa, img: "assets/r-21-atletico-conjunto.webp", modelo: "assets/r-21-atletico-modelo.webp" },
      { name: "Conjunto Inter Miami 2024 local", meta: "Conjunto del Inter Miami con camiseta rosa a rayas y pantaloneta rosa. Escudo y patrocinadores bordados.", price: "$100.000", variants: tallasRopa, img: "assets/r-24-inter-miami-conjunto.webp", modelo: "assets/r-24-inter-miami-modelo.webp" },
      { name: "Conjunto Inter de Milán 2024 local", meta: "Conjunto del Inter de Milán con camiseta a rayas negras y azules y pantaloneta negra. Escudo y patrocinadores bordados.", price: "$100.000", variants: tallasRopa, img: "assets/r-25-inter-conjunto.webp", modelo: "assets/r-25-inter-modelo.webp" },
      { name: "Conjunto Manchester City 2024 local", meta: "Conjunto del Manchester City con camiseta azul celeste y pantaloneta blanca. Escudo y patrocinadores bordados.", price: "$100.000", variants: tallasRopa, img: "assets/r-26-city-conjunto.webp", modelo: "assets/r-26-city-modelo.webp" },
      { name: "Conjunto Juventus 2024 local", meta: "Conjunto de la Juventus con camiseta a rayas blanco y negro con detalles rosa y pantaloneta negra. Escudo y patrocinadores bordados.", price: "$100.000", variants: tallasRopa, img: "assets/r-20-juventus-conjunto.webp", modelo: "assets/r-20-juventus-modelo.webp", fotos: ["assets/r-20-juventus-modelo2.webp"] }
];

export const relojes = relojesRaw.map(p => ({ ...p, id: slug(p.name), seccion: "Relojes", price: "A cotizar", sizes: null }));
export const zapatos = zapatosRaw.map(p => ({ ...p, id: slug(p.name), seccion: "Zapatos", sizes: sizes }));
export const chanclas = chanclasRaw.map(p => ({ ...p, id: slug(p.name), seccion: "Chanclas", sizes: sizes, img: p.img || (p.imgs && p.imgs[0]) }));
export const ropa = ropaRaw.map(p => ({ ...p, id: slug(p.name), seccion: "Ropa", sizes: tallasRopa }));
export const productos = relojes.concat(zapatos).concat(chanclas).concat(ropa);
export function findProducto(id) { return productos.find(p => p.id === id) || null; }
