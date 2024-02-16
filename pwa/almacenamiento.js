/*
-función constructora
- cree un array de objetos para almacenar las urls de la página,
- creo la funcion leer para leer el array de las url
- devuelvo la misma función para leer para ver si está bien. 
*/

function AlmacenamientoUrl() {
    let urls = {
      "notiUno": "https://baristakim.es/5-errores-comunes-tueste-cafes-especialidad",
      "notiDos": "https://baristakim.es/impacta-la-fermentacion-del-cafe-la-calidad-salud",
      "notiTres": "https://www.sommelierdecafe.com/?p=17925",
      "notiCuatro": "https://uncafetito.com/2017/12/01/sabria-como-identificar-el-mejor-cafe/",
    };
  
    function leer(a) {
      return urls[a];
    }

  
    return leer;
  }

  //instancio el almacenamientoUrl
  const almacenamientoUrl = new AlmacenamientoUrl();
  
  /*creo la funcion de los botones y lo llamó por el Id para que cuando ocurra el evento click 
se dirija hacia las urls que  le corresponde de cada noticia */

  function crearBotonVerMas(id) {
    const verMasBtn = document.getElementById(id);
    verMasBtn.addEventListener('click', function() {
      const url = almacenamientoUrl(id);
      open(url); 
    });
  }
  
  //creo los botones 
  crearBotonVerMas('notiUno');
  crearBotonVerMas('notiDos');
  crearBotonVerMas('notiTres');
  crearBotonVerMas('notiCuatro');

