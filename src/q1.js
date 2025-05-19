// vamos declarar a função para verificar se o que esta dentro do parametro é do tipo string ou não
let isString = (string) => {
  // é impotante a estrutura de decisão para testar se o tipo do parametro é estritamente igual a string
  // obs: o metrodo typeof retorna o tipo primitivo de uma "variavel" escrito como string
  if (typeof string === "string") {
    // se a string for estritamente igual a "string" retorna true
    return true;
  } else {
    // se não for retorna false
    return false;
  }
};

// log: função ambiente do javaScript para exibir algo no console
// vamos usar o log para exibir o retorno da função passando uma string qualquer como parametro
// uso da crase para possibilitar os string literals
console.log(`IsString: ${isString("Round Hood")}`);
