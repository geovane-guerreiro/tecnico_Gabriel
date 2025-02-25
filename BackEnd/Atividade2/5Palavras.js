function ContaLetras(texto){
    const letras = texto.split("");
    const Separado = [];
    for(const letra of letras){
        if(Separado[letra]){
            Separado[letra] += 1;
        }else{
            Separado[letra] = 1;
        }
    }
    return Separado;

}


console.log(ContaLetras("banana"));
