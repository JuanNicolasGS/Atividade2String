// declarando a função recebendo parametros: a string para ser cortada e cut que é o número de letras para cortar
let toCut = (string, cut) => {
    // retorna a string cortada começando sempre do primeiro elemento e cortando cut que é quantidade de letras
    // slice é uma "função" que corta uma string e recebe 2 parametros =>
        // 1° onde inicia
        // 2° quantidade de letras para cortar
    return string.slice(0, cut);
};

// log: "função" ambiente do javaScript para exibir algo no console
// vamos usar o log para exibir o retorno da função passando uma string qualquer como parametro
// uso da crase para possibilitar os string literals
console.log(`ToCut: ${toCut('Round Hood', 4)}`)