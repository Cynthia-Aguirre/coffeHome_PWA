
//comprueba si el navegador admite SW
//se ejecuta el código dentro del condicional if.


if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceWorker-v2.js")
    .then(res => console.log("Service Worker registrado", res))
    .catch(err => console.log("Service Worker NO registrado", err));
}
  

  
  /*llamo al método "register" en el objeto navigator.serviceWorker que toma una ruta relativa, el serviceWorker.js y devuelve una promesa
  si el registro es exitoso, se llama a la función "then" y se imprime un mensaje de registro exitoso en la consola si falla, 
  se llama a la función "catch" y se imprime un mensaje de error */