// geralmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, telefone,
// número ou resposta para sua pergunta mais secreta ainda está correto, no entanto,
// como alguém pode olhar por cima do seu ombro, você não quer que isso apareça em sua
// tela. em vez disso, nós o mascaramos

// sua tarefa é escrever uma função maskify, que altera todos, exceto os últimos quatro caracteres, para "#"

// Exemplos:
// "4556364607935616" --> "############5616"
// "64607935616" --> "######5616"
// "1" --> "1"
// "" ---> ""

//"Qual o nome do seu primeiro pet?"

//"Skippy" --> "##ippy"

// "Nanananananananananana Batman!" --> "##########################man!"
function maskify(string) {
  return string.slice(-4).padStart(string.length, '#')
}

module.exports = maskify;
