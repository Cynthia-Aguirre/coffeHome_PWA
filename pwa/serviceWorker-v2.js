// const nombreCache = "sarasa";
// const assets = [
//   "./",
//   "./index.html",
//   "./style.css",
//   "./app.js",
//   "./scrip.js",
//   "./blog.html",
//   "./receta.html",
//   "./comentarios.js",
//   "./almacenamiento.js",
//   "./modo-oscuro.js",
//   "./manifest.json",
//   "./imagenes/logo.png",
//   "./imagenes/logo96x96.png",
//   "./imagenes/logo128x128.png",
//   "./imagenes/logo144x144.png",
//   "./imagenes/logo152x152.png",
//   "./imagenes/logo192x192.png",
//   "./imagenes/logo345x345.png",
//   "./imagenes/logo512x512.png",
//   "./imagenes/prensa-Francesa.jpg",
//   "./imagenes/carrousel/banner2.png",
//   "./imagenes/carrousel/banner3.png",
//   "./imagenes/carrousel/banner4.png",
//   "./imagenes/noti/noti_cuatro.jpeg",
//   "./imagenes/noti/noti_dos.png",
//   "./imagenes/noti/noti_tres.jpg",
//   "./imagenes/noti/noti_uno.jpg",
//   "./imagenes/productos/americano.png",
//   "./imagenes/productos/avellana.png",
//   "./imagenes/productos/cappuccino_helado.png",
//   "./imagenes/productos/caramel_macchiato.png",
//   "./imagenes/productos/caramel_helado.png",
//   "./imagenes/productos/ddl.png",
//   "./imagenes/productos/frio1.png",
//   "./imagenes/productos/latte.png",
//   "./imagenes/productos/macchiato.png",
//   "./imagenes/productos/mocha_blanco.png",
//   "./imagenes/productos/mocha_frapp_negro.png",
//   "./imagenes/productos/mocha_frapp.png",
//   "./imagenes/productos/vainilla-latte.png",
//   "./imagenes/productos/vainilla.png",
//   "./imagenes/servicios/logo.jpg",
//   "./imagenes/servicios/cafe_2.jpg",
//   "./imagenes/servicios/banner.png",


// ];

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(nombreCache).then(cache => {
//       cache.addAll(assets);
//       console.log()
//     })
//   );
// });

// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       return response || fetch(event.request);
//     }),
//   );
// });

const cacheName = 'otroCache';

self.addEventListener('fetch', (event) => {
  // Verificar si es una solicitud de una imagen
  if (event.request.destination === 'image', 'text', 'application') {
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        // Buscar en la caché primero
        return cache.match(event.request.url).then((cachedResponse) => {
          // Devolver la respuesta en caché si existe
          if (cachedResponse) {
            return cachedResponse;
          }

          // De lo contrario, hacer la solicitud a la red
          return fetch(event.request).then((fetchedResponse) => {
            // Agregar la respuesta de la red a la caché para visitas futuras
            cache.put(event.request, fetchedResponse.clone());

            // Devolver la respuesta de la red
            return fetchedResponse;
          });
        });
      })
    );
  } else {
    return;
  }
});