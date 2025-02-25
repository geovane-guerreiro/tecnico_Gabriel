function fibonacci(numero){
    let sequencia = [0,1];
    for(var i = 0; i <= numero; i++){
        const formula = sequencia[sequencia.length-1] + sequencia[sequencia.length-2];
        sequencia.push(formula);
    }
    return sequencia;
}

console.log(fibonacci(5))
