// Função para calcular o IMC
function calcularIMC(event) {
  event.preventDefault();

  // Capturando elementos do DOM
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  var resultado = document.getElementById("resultado");

  // Convertendo entradas para números float
  peso = parseFloat(peso);
  altura = parseFloat(altura);

  // Validando entradas
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.innerHTML = `<p>Ei, me ajuda aí. Digita um peso e altura válidos, pô.</p>`;
    resultado.className = 'mt-6 p-4 rounded-lg bg-red-900/50 border-2 border-red-500 text-red-400 text-center transition-all duration-300';
    return;
  }

  // Calculando o IMC
  const imc = peso / (altura * altura);

  let classificacao = '';
  let classesDeEstilo = '';

  // Determinando a classificação do IMC e a classe de estilo correspondente
  if (imc < 18.5) {
    classificacao = imc < 17 ? 'Muito abaixo do peso' : 'Abaixo do peso';
    classesDeEstilo = 'border-yellow-500 text-yellow-400';
  } else if (imc < 25) {
    classificacao = 'Peso ideal (Parabéns!)';
    classesDeEstilo = 'border-green-500 text-green-400';
  } else if (imc < 30) {
    classificacao = 'Acima do peso';
    classesDeEstilo = 'border-orange-500 text-orange-400';
  } else if (imc < 35) {
    classificacao = 'Obesidade I';
    classesDeEstilo = 'border-red-500 text-red-400';
  } else if (imc < 40) {
    classificacao = 'Obesidade II (Severa)';
    classesDeEstilo = 'border-red-600 text-red-500';
  } else {
    classificacao = 'Obesidade III (Mórbida)';
    classesDeEstilo = 'border-red-700 text-red-600'; 
  }

  const mensagem = `
    <p class="text-lg">Seu IMC é <span class="font-bold text-2xl">${imc.toFixed(2)}</span></p>
    <p class="mt-1 text-sm">${classificacao}</p>
  `;
  
  // Exibindo o resultado com a classificação e estilo apropriados
  resultado.className = 'mt-6 p-4 rounded-lg bg-slate-800 border-2 text-center transition-all duration-300';
  resultado.classList.add(...classesDeEstilo.split(' '));
  resultado.innerHTML = mensagem;
  
  // Limpando os campos de entrada
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}

