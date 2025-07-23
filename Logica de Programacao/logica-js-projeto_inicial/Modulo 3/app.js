alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
let chute;
let tentativas;

//Enquanto chute não for ingual ao n.s.
while (chute != numeroSecreto) {
  chute = prompt("Escolha um numero entre 1 e 10");
  //Se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert(
      "Isso aí! Você descobriu o número secreto" +
        numeroSecreto +
        "com " +
        tentativas +
        " tentativas."
    );
  } else {
    if (chute > numeroSecreto) {
      alert("O número secreto é menor que " + chute);
    } else {
      alert("O número secreto é maior que " + chute);
    }
    tentativas++;
  }
}
