
// Para ejucutar el algoritmo con parametro descomente la linea 4 a la 26

// function parametro() {
//   const myArray = []
//   let tamaño = prompt("Ingrese longitud del Array")
//   let mitad = tamaño / 2
//   let temporal = tamaño - 1 

//   for (let i = 0; i < tamaño; i++) {
//     let n = prompt(`ingrese numero ${i + 1}`)
//     myArray.push(n)
//   }


//   for (let i = 0; i < mitad; i++){
//     if(myArray[i] != myArray[temporal]){
//       return console.log("Array No es Simetrico")
//     }else{
//       temporal--
//     }
//   }
//   return console.log("Array Simetrico, Longitud", tamaño)

// }
// parametro()


// Los datos seran visualisados en la consola del navegador
function simetrico() {
  const myArray = [2, 8, 5, 11, 4, 25, 25, 4, 11, 5, 8, 2]
  const tamaño = myArray.length
  const mitad = tamaño / 2
  let temporal = tamaño - 1 


  for (let i = 0; i < mitad; i++){
    if(myArray[i] != myArray[temporal]){
      return console.log("Array No es Simetrico")
    }else{
      temporal--
    }
  }
  return console.log("Array Simetrico, Longitud", tamaño)
}
simetrico()