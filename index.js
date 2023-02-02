// Ejercicio 1

// Devuelve el valor de la propiedad 'b' del objeto 'a' dentro del objeto original si existe, si no, devuelve undefined.

function myFunction(obj) {
    if (obj.a) {
        return obj.a.b;
    }
}

console.log(myFunction({a:1}));
console.log(myFunction({a:{b:{c:3}}}));
console.log(myFunction({b:{a:1}}));
console.log(myFunction({a:{b:2}}));

// Ejercicio 2

function incrementItems(arr) {
    let newArr = arr.map((element)=>{
        return element+1;
    })
    return newArr;
  }

console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));

// Ejercio 3

const  checkEquals = (arr1, arr2) => arr1.join('') === arr2.join('');

console.log(checkEquals([1, 2], [1, 3]));
console.log(checkEquals([1, 2], [1, 2]));
console.log(checkEquals([4, 5, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 6, 7]));