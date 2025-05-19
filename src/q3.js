// declarando a função para tronformar string com mais de uma palavra em um array
let toArray = (string) => {
  // vamos retornar a string passada como parametro separada em um array usando o split(/\s+/)
  // split é uma "função" que divide string
  // estrutura do split =>
    // \s corresponde a qualquer espaço vazio
    // + siginifica que ele pega mais de 1 espaço vazio
    // /parametros/ as barras no inicio e fim determina um regex (não entendi direito o que é regex) 
  return string.split(/\s+/);
};

// log: "função" ambiente do javaScript para exibir algo no console
// vamos usar o log para exibir o retorno da função passando uma string qualquer como parametro
console.log(toArray('Round Hood'))
