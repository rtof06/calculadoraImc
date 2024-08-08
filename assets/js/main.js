function main() {
   const btnCalcular = document.querySelector("#btnCalcular");

   btnCalcular.addEventListener("click", (event) => {
      event.preventDefault();
      calculaIMC();
   })
}

function calculaIMC() {
   let peso = document.querySelector("#peso");
   peso = Number(peso.value);
   let altura = document.querySelector("#altura");
   altura = Number(altura.value)/100;

   let imc = peso/altura**altura;
   imc = imc.toFixed(2);
   console.log(imc);
   console.log(isNaN(imc));
   const resultado = document.querySelector(".resultado-final");
   resultado.style.display = "block";

   if (isNaN(imc) === false) {
      resultado.innerHTML = `Seu imc é ${imc}`;
   } else {
      naNResult(resultado);
   }
}

function naNResult(resultado) {
   resultado.innerHTML = `Coloque um resultado válido!`;
   resultado.style.backgroundColor = "#ff0000";
   resultado.style.color = "#fff";
   resultado.style.color
}

main();