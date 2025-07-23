//1 Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Qual é o dia da semana? ");
if (diaSemana == "Sábado" || diaSemana == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

//2 vPeça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome
let nomeUsuario = prompt("Qual é o seu nome? ");
alert("Bem-Vindo(a), " + nomeUsuario);
