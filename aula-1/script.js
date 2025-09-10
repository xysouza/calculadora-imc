/*
// While = Quer dizer enquanto
var x = 0;

while (x <= 10) {
    document.write("<br>O valor do X é: " + x);
    
    x++;
}

// For = Para
for (a = 0; a < 5; a++) {
  document.write("<br>O valor do A é: " + a); 
} 

*/

// Switch = Trocar
function pedir() {
  var valor = prompt("Digite o número do pedido: ");
  switch(Number(valor)) {
    case 1:
      alert("Você pediu um suco.");
      break;
    case 2:
      alert("Você pediu uma água.");
      break;
    case 3:
      alert("Você pediu um refrigerante.");
      break;
    case 4:
      alert("O garçom já está indo até você.");
      break;
    default:
      alert("Número inválido, por favor escolha uma opção entre 1 e 4.");
  };
};