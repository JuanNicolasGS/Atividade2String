// vamos declarar a função para verificar se a string passada como parametro está vazia ou não
let isEmpty = (string) => {
  // estrutura de decisão para testar se o length da string é igual a 0
  // usando a função trim() para remover todos os espaços vazios
  if (string.trim().length == 0) {
    // se o tamanho da string for igual a 0 retorna true
    return true;
  } else {
    // se não retorna false
    return false;
  }
};

// log: "função" ambiente do javaScript para exibir algo no console
// vamos usar o log para exibir o retorno da função passando uma string qualquer como parametro
// uso da crase para possibilitar os string literals
console.log(`IsEmpty:  ${isEmpty("Round Hood")}`);
