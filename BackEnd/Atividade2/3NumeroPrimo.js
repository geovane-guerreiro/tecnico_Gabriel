const numero = 4;
let verificador = 0;

for(let i = numero; i >= 1; i--){
    if(numero % i == 0){
        verificador += 1;
    }
}
if(verificador == 2){
    console.log("O numero ", numero," é primo.")
}else{
    console.log("O numero ", numero," não é primo.")
}