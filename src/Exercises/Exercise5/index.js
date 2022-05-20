// faça uma função que verifica se a primeira letra de uma string é maiuscula, retorne true ou false

// Exemplo de saida:
// checkIfTheFirstLetterIsUppercase("Brasil") --> true
// checkIfTheFirstLetterIsUppercase("mobiauto") --> false
// checkIfTheFirstLetterIsUppercase("xXx xXx") --> false
// checkIfTheFirstLetterIsUppercase("xDD") --> false
// checkIfTheFirstLetterIsUppercase("Deu Certo!") --> true

function checkIfTheFirstLetterIsUppercase(word) {
  // ou poderia usar a tabela ASCII word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90
  return word.charAt(0) === word.charAt(0).toUpperCase()
}

module.exports = checkIfTheFirstLetterIsUppercase;
