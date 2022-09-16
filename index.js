
// Validación ingresando datos
// const myArray = []
// let bandera = 0;

// let tamaño = prompt("Ingrese numero de elementos")
// let mitad = tamaño / 2
// let temporal = tamaño - 1 

// for (let i = 0; i < tamaño; i++) {
//   let n = prompt(`ingrese numero ${i + 1}`)
//   myArray.push(n)
// }

// for (let i = 0; i < mitad && bandera == 0; i++){
//   if(myArray[i] != myArray[temporal]){
//     bandera = 1;
//   }else{
//     temporal--
//   } 
// }

// if (bandera == 0) {
//   console.log("longitud",tamaño)
//   console.log("Arreglo es Simetrico")
// } else {
//   console.log("Arreglo es NO ES Simetrico")
// }


// Validación datos quemados
const myArray = [2, 8, 5, 11, 4, 25, 25, 4, 11, 5, 8, 2]
let bandera = 0;
let tamaño = myArray.length
let mitad = tamaño / 2
let temporal = tamaño - 1 


for (let i = 0; i < mitad && bandera == 0; i++){
  if(myArray[i] != myArray[temporal]){
    bandera = 1;
  }else{
    temporal--
  } 
}

if (bandera == 0) {
  console.log("longitud",tamaño)
  console.log("Arreglo es Simetrico")
} else {
  console.log("Arreglo es NO ES Simetrico")
}


