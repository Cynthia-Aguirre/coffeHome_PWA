const container = document.querySelector(".container");
const cafes = [
  { 
    'id': 1,
    'name': "Cappucino Helado", 
    'image': "imagenes/productos/cappuccino_helado.png",
    'descripcion': "Café, Canela , Crema batida, Leche, Hielo"  
  },
  { 
    'id': 2,
    'name': "Caramel Helado", 
    'image': "imagenes/productos/caramel_helado.png",
    'descripcion': "Café, Jarabe de caramelo , Crema batida, hielo"  
  },
  {
    'id': 3,
    'name': "Caramel Macchiato", 
    'image': "imagenes/productos/caramel_macchiato.png",
    'descripcion': "Café, Jarabe de caramelo , Crema batida"   
  },
  { 
    'id': 4,
    'name': "Cappuccino Avellana", 
    'image': "imagenes/productos/frio1.png",
    'descripcion': "Café, Jarabe de avellana , Canela en polvo, Nuez picadas"  
  },
  { 
    'id': 5,
    'name': "Macchiato", 
    'image': "imagenes/productos/macchiato.png",
    'descripcion': "Café, Leche vaporizada o espumada, vainilla"  
  },
  { 
    'id': 6,
    'name': "Mocha Blanco", 
    'image': "imagenes/productos/mocha_blanco.png",
    'descripcion': "Café fuerte, jarabe de chocolate blanco, vainilla, Crema batida"  
  },
];

const coffeCard = () => {
  const output = cafes
    .map(({ name, image, descripcion }) => {
      return `
        <div class="card">
          <img class="card--avatar" src="${image}">
          <h1 class="card--title">${name}</h1>
          <p>${descripcion}</p>
        </div>
      `;
    })
    .join("");
    
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", coffeCard);

/*declaro la constante y le asigno un nombre a la lista */

const dbName = 'cafeDB';
let version = 1;

//creo una conexion a la BD
let request = indexedDB.open(dbName, version);

//verifico si existe miscafes, sino se crea
request.onupgradeneeded = function (event) {
  console.log(event.oldVersion);

  let db = event.target.result;

  if (!db.objectStoreNames.contains('misCafes')) {
    let store = db.createObjectStore('misCafes', {
      keyPath: 'id',
      autoIncrement: true
    });
//creo el indice para buscar por nombres mis cafes en el array
    store.createIndex('name_index', 'name', {
      unique: false
    });
  }
};
//si no se conecta salta un error
request.onerror = function (e) {
  console.log('Error', e);
};

//si se conecta bien
request.onsuccess = function (e) {
  console.log('Conexión exitosa');
  let db = e.target.result;
  let trx = db.transaction('misCafes', 'readwrite');
  let tipoCafeDB = trx.objectStore('misCafes');

  //traigo los objetos 
  cafes.forEach(obj => {
    const { id, name, descripcion } = obj;
    tipoCafeDB.add({ id, name, descripcion });
  });
//llamo a la transaccion si fue exiitosa
  trx.oncomplete = function () {
    console.log('Cafecitos en IndexedDB');
  };
//llamo a la transaccion si fue error
  trx.onerror = function () {
    console.error('No se pudieron almacenar los Cafecitos');
  };
};

 