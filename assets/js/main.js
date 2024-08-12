function main() {
   const btnCalcular = document.querySelector("#btnCalcular");

   btnCalcular.addEventListener("click", (event) => {
      event.preventDefault();
      calculaIMC();
   })
}

function calculaIMC() {
   const resultado = document.querySelector(".resultado-final");
   resultado.style.display = "block";

   let peso = document.querySelector("#peso");
   peso = Number(peso.value);
   let altura = document.querySelector("#altura");
   altura = Number(altura.value) / 100;

   let imc = peso / altura ** 2;
   imc = imc.toFixed(2);


   if (isNaN(imc) === false) {
      if (imc < 18.5) {
         resultado.innerHTML = `<p>Seu imc é ${imc}</p>`;
         abaixoDoPeso(resultado);
      }
      else if (imc >= 18.5 <= 24.9) {
         resultado.innerHTML = `Seu imc é ${imc}</Sp>`;
         pesoNormal(resultado);
      }
      else if (imc >= 25 <= 29.9) {
         resultado.innerHTML = `<p>Seu imc é ${imc}</p>`;
         sobrepeso(resultado);
      }
      else if (imc >= 30 <= 34.9) {
         resultado.innerHTML = `<p>Seu imc é ${imc}</p>`;
         obesidadeGrauUm(resultado);
      }
      else if (imc >= 35 <= 39.9) {
         resultado.innerHTML = `<p>Seu imc é ${imc}</p>`;
         obesidadeGrauDois(resultado);
      }
      else if (imc >= 40) {
         resultado.innerHTML = `<p>Seu imc é ${imc}</p>`;
         obesidadeGrauTres(resultado);
      }
   } else {
      naNResult(resultado);
   }
}

function naNResult(resultado) {
   resultado.innerHTML = `Coloque um resultado válido!`;
   resultado.style.backgroundColor = "#ff0000";
   resultado.style.color = "#fff";
}

function abaixoDoPeso(resultado) {
   resultado.innerHTML += `<p>Você está abaixo do peso.</p>`;
   resultado.style.backgroundColor = "#1f79f7";
   resultado.style.color = "#fff";
}

function pesoNormal(resultado) {
   resultado.innerHTML += `<p>Você está com o peso normal.</p>`;
   resultado.style.backgroundColor = "#02c002";
   resultado.style.color = "#fff";
}

function sobrepeso(resultado) {
   resultado.innerHTML += `<p>Você está em sobrepeso.</p>`;
   resultado.style.backgroundColor = "#ffa500";
   resultado.style.color = "#fff";
}

function obesidadeGrauUm(resultado) {
   resultado.innerHTML += `<p>Você está com obesidade de grau 1.</p>`;
   resultado.style.backgroundColor = "#ff6600";
   resultado.style.color = "#fff";
}

function obesidadeGrauDois(resultado) {
   resultado.innerHTML += `<p>Você está com obesidade de grau 2.</p>`;
   resultado.style.backgroundColor = "#ff5100";
   resultado.style.color = "#fff";
}

function obesidadeGrauTres(resultado) {
   resultado.innerHTML += `<p>Você está com obesidade de grau 3.</p>`;
   resultado.style.backgroundColor = "#720d00";
   resultado.style.color = "#fff";
}

main();