function primo(numero){
    let verificador = 0;
    
    for(let i = numero; i >= 1; i--){
        if(numero % i == 0){
            verificador += 1;
        }
    }
    if(verificador == 2){
        return "É primo.";
    }else{
        return "Não é primo.";
    }
    
}

console.log(primo(4));
