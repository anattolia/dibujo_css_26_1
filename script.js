//console.log("hola");

const varTitulo = document.getElementById("titulo");

varTitulo.addEventListener("click", () => {
   varTitulo.innerText = "¡Buenos días!";
   varTitulo.style.color = "#32a852";
   varTitulo.style.backgroundColor = "white";
})