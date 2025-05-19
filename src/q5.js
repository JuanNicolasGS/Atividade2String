// declarando a função para abreviar a string
let toAbbrev = (string) => {
  // declarando duas variaveis partindo da separação da string
  // usei split para separar onde tiver espaço vazio
  // split é uma "função" que divide string
  // estrutura do split =>
    // \s corresponde a qualquer espaço vazio
    // + siginifica que ele pega mais de 1 espaço vazio
    // /parametros/ as barras no inicio e fim determina um regex (não entendi direito o que é regex)
  const [firstName, lastName] = string.split(/\s+/);
  // retornando o primeiro nome que foi declarado na linha acima + o ultimo nome abreviado pegando apenas a primeira letra
  return `${firstName} ${lastName[0]}.`;
};

// log: "função" ambiente do javaScript para exibir algo no console
// vamos usar o log para exibir o retorno da função passando uma string qualquer como parametro
// uso da crase para possibilitar os string literals
console.log(`ToAbbrev: ${toAbbrev("Round Hood")}`);


// Só funciona com string com 2 nomes, mas facilmente pode ser implementado de outra forma para funcionar com 3+ palavras