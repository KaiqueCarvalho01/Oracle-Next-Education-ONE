alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas;

//Boas práticas de programação

//Enquanto chute não for ingual ao n.s.
while (chute != numeroSecreto) {
  chute = prompt("Escolha um numero entre 1 e " + numeroMaximo);
  //Se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert("O número secreto é menor que " + chute);
    } else {
      alert("O número secreto é maior que " + chute);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

if (tentativas > 1) {
  alert(
    "Isso aí! Você descobriu o número secreto" +
      numeroSecreto +
      "com " +
      tentativas +
      palavraTentativa
  );
}
