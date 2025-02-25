function removeDuplicados(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicados([1,2,2,3,4,4,5,6,7,7,8]));