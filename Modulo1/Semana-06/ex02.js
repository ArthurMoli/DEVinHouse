let array1 = [12,43,6,2,8,5,3];
let array2 = ["1", "2", "3", "4"];

function juntarArrays(...arrays) {
    var arrayConcatenado = [].concat(...arrays)
    return arrayConcatenado;
}

console.log(juntarArrays(array1, array2));