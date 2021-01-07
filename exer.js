// Escribe una función en JavaScript llamada count que reciba dos parámetros: str y char. La función debe retornar el número de veces que aparece char en str.

function count (str, char){
    let c = 0;
    str = str.toLowerCase();
    char = char.toLowerCase();

    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            c++;
        }
    }

    console.log(`la cantidad de veces que ${char} aparece en ${str} es de ${c}`);
}

count('holal', 'L');

// Escribe una función en JavaScript llamada filter que reciba un arreglo de números como parámetro y retorne un nuevo arreglo con los números mayores a 10.

function filter(arr){
    let newArr = arr.filter(val => val >= 10);
    console.log(newArr);
}

let arr = [3, 12, 45, 7];
filter(arr)

// Escribe una función en JavaScript llamada hypotenuse que reciba dos parámetros: a y b, que representan los lados de un triángulo, y que retorne la hipotenusa.

function hypotenuse(a, b) {
    let res = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));
    console.log(res);
}

hypotenuse(3, 4);