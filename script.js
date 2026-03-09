const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");

const listaTextos = ["uno", "dos", "tres", "cuatro", "cinco"];

let estadoInicial = true;
let indice = 1;

varTitulo.addEventListener("click", () => {
   if(estadoInicial === true) {
      varTitulo.innerText = "¡Buenos días!";
      varTitulo.style.color = "#32a852";
      varTitulo.style.backgroundColor = "white";
   } else {
      varTitulo.innerText = "Hola";
      varTitulo.style.color = "rgb(255, 21, 21)";
      varTitulo.style.backgroundColor = "transparent";
   }
   estadoInicial = !estadoInicial;
})

listaTextos[listaTextos[0]];
varTexto.addEventListener("click", () => {
   if(indice < listaTextos.length){
   varTexto.innerText = listaTextos[indice];
   indice = indice + 1;
   } else {
  // indice = 0; // Si quiero que vuelva a empezar
   varTexto.innerText = "FIN.";
   }
})