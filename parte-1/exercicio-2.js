/* Faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log 
(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 
se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método 
array.sort(). Spoiler: É possível realizar uma função que ordene 
qualquer array de números. */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortNumbers =(arrayNumbers) => `Os números ${arrayNumbers.sort(function(a, b){return a - b})} se encontram ordenados de forma crescente!`;
console.log(sortNumbers(oddsAndEvens));
// console.log(oddsAndEvens); // será necessário alterar essa linha 😉
