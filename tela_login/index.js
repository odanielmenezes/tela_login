let cursor = document.getElementById("cursor");
let letras = document.getElementsByClassName("letras");
let cont = 0;
let decCont = letras.length - 1;
console.log(decCont);

// ----- Animação do cursor ----- //
setInterval(() => {
    //esconde o cursor
  cursor.classList.add("none");
}, 400);

setInterval(() => {
    //mostra o cursor
  cursor.classList.remove("none");
}, 800);
// ----- Fim animação do cursor ----- //

// ----- Animação das letras ----- //
function animation() {
    
  var mostrarLetras = setInterval(() => {
    letras[cont].classList.add("teste");
    cont++;
    if (cont === decCont + 1) {
      console.log("AAAAA");
      clearInterval(mostrarLetras);
      setTimeout(() => {
        var escondeLetras = setInterval(() => {
          letras[decCont].classList.remove("teste");
          decCont--;
          if (decCont < 0) {
            clearInterval(escondeLetras);
            decCont = letras.length - 1;
            cont = 0;
            animation();
          }
        }, 100);
      }, 2000);
    }
  }, 200);
}
animation();
