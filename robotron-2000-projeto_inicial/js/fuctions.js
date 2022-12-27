
const robotron = document.querySelector("#robotron");

//função declarada com nome
robotron.addEventListener("click", dizOI);
// dando parametros para a função.
function dizOI(nome) {
    console.log("oi" + nome);
    console.log("Bem-vindo ao robotron 2000");
}

//função anonima  com declaração "function"

robotron.addEventListener("click", function(){
    console.log("oi");
    console.log("robotron 2000");
});

/*funcção anonima com declaração de "fuction" abreviada(arrow function " função de seta") para "() =>";

robotron.addEventListener("click", () => {
    console.log("oi");
    console.log("Você clicou em mim");
}); */

dizOI("Juan Anjos");