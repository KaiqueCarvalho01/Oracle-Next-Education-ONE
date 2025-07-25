let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function verificarBotaoConsole() {
  console.log("Botão foi clicado");
}
function verificarBotaoAlerta() {
  alert("Eu amo JS");
}
function verificarBotaoPrompt() {
  let cidade = prompt("Qual é a sua cidade?");
  alert("Estive em " + cidade + " e lembrei de você!");
}
function botaoSoma() {
  let n1 = prompt("Digite um número:");
  let n2 = prompt("Digite outro número:");
  let soma = parseInt(n1) + parseInt(n2);
  alert("A soma é: " + soma);
}
