const numero = 5;
let sequencia = [0,1];


for(var i = 0; i <= numero; i++){
    const formula = sequencia[sequencia.length-1] + sequencia[sequencia.length-2];
    sequencia.push(formula);
}
    console.log(sequencia);
