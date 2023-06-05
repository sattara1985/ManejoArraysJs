
// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let numeros = [];

for (let i = 0; i < 10; i++) {
  let numeroAleatorio = Math.floor(Math.random()*100);
  numeros.push(numeroAleatorio);
}


document.write('Array con 10 numeros al azar entre 0 y 99 => [ '+numeros+ ' ]');
document.write('Array  ordenado => [ '+numeros.sort()+ ' ]');


// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

let palabras = prompt('Ingrese varias palabras separadas por coma:');
let arrayPalabras = palabras.split(",");

console.log(arrayPalabras);
alert("asi quedaria el array convertido => [ "+arrayPalabras+' ]');
alert("asi quedaria el array ordenado alfabeticamente => [ "+arrayPalabras.sort()+' ]');
console.log("asi quedaria el array ordenado alfabeticamente => [ "+arrayPalabras.sort()+' ]');


// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo. este ejercicio se debe realizar utilizando javascript

let numeros2 = [10, 40, 30, 20, 15, 5];

numeros2.sort((a, b) => a - b); // Ordena el array de menor a mayor

let numeroMenor = numeros2[0]; // Obtiene el primer elemento el menor
let numeroMayor = numeros2[numeros2.length - 1]; // Obtiene el último elemento el mayor

console.log("Arreglo ordenado de menor a mayor:", numeros2);
console.log("Arreglo ordenado de mayor a menor:", numeros2.reverse());
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);