const texto = "banana";
const letras = texto.split("");
const Separado = [];

for(const letra of letras){
    if(Separado[letra]){
        Separado[letra] += 1;
    }else{
        Separado[letra] = 1;
    }
}

console.log(Separado);