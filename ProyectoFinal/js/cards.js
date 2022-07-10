const tituloCards = ["Iphone 13 Pro Max", "Reloj", "Audifonos", "Ipad", "Portatil", "Reproductor"];
const cantidadStock = [4, 6, 5, 8, 4, 2];
const descripcionCards = [
  "Iphone 13 pro max de 128Gb",
  "Smartwatch Pro 2",
  "Airdpods",
  "Ipad Pro 2",
  "Mac book air 2",
  "Reproductor JBL",
];
const imagenCards = ["img1", "img2", "img3", "img4", "img5", "img6"];

const contenidoCard = document.querySelector(".container_custom");
for (let index = 0; index < tituloCards.length; index++) {
  const fetch = document.querySelector(".container_custom").innerHTML;
  contenidoCard.innerHTML =
    `<div id="cards${index}" class="boxes">
        <div class="box-content">
            <h4>${tituloCards[index]}</h4>
            <h5>Cantidad en Bodega ${cantidadStock[index]}</h5>
            <p><small>${descripcionCards[index]}</small></p>
        </div>
  </div>` + fetch;
  let imageCardProduct = document.getElementById(`cards${index}`);
  imageCardProduct.style.backgroundImage = `url('assets/${imagenCards[index]}.jpg')`
}

console.log(contenidoCard);