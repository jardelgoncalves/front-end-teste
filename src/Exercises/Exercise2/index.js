// faça uma função que recebe um objeto como primeiro parametro e como segundo parametro um objeto com dados que vão atualizar o objeto do primeiro parametro
// Obs: se no objeto do segundo parametro tiver dados que o objeto do primeiro não tem, o valor não deve persistir no objeto de retorno da função, somente
// é atualizado os dados que o objeto do primeiro parametro possuir.

// Ex: updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 })
// --> saida: { name: 'Marcos', country: 'Japão', age: 33 }

// Ex: updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15, description: "camiseta 100% algodão" })
// --> saida: { name: "Marcos", country: "Brasil", age: 22 }

// Ex: updateData({ name: "Rafael", country: "Chile", age: 42 }, { name: "Camiseta Polo", price: 59.9, amount: 30 })
// --> saida: { name: "Camiseta Polo", price: 59.9, amount: 30 }

function updateData(currentObject, newDataObject) {
  for (const property in newDataObject) {
    if(property in currentObject) {
      currentObject[property] = newDataObject[property]
    }
  }
  return currentObject
}

module.exports = updateData;
