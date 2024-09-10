window.addEventListener("load", function() {
    let vetAges = [10, 21, 31, 40];
    let userNum = prompt("Informe um número qualquer:", 21);
    document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p>`);
    document.write(`<p>Média das idades = ${avgAges(sumAges(vetAges), vetAges)}</p>`);
    document.write(`<p>Maior idade = ${maxAge(vetAges)}</p>`);
    document.write(`<p>Idades ímpares = ${oddAge(vetAges)}</p>`);
    document.write(`<p>Todos maiores de idade? ${legalAge(vetAges)}</p>`);
    document.write(`<p>Comparação de valores: ${userNumber(vetAges, userNum)} (Valor informado: ${userNum})</p>`);
    document.write(`<p>Idades maiores ou iguais a determinada idade: ${displayAges(vetAges, userNum)}</p>`);
    document.write(`<p>Média das idades das pessoas com idades maiores ou iguais a determinada idade: ${avgMaxAge(displayAges(vetAges, userNum))}</p>`);
});

sumAges = vet => {
    let sum = 0;
    for (i=0; i<vet.length; i++) sum+=vet[i];
    
    return sum;
    }

avgAges = (sum, vet) => sum/vet.length;

maxAge = vet => {
    let maxAge = vet[0];
    for(var i = 0; i<vet.length; i++){
        if(vet[i]>maxAge){
            maxAge = vet[i];
        }
    }

    return maxAge;
}

oddAge = vet => {
    let vetOdd = [];
    for(var i = 0; i<vet.length; i++){
        if(vet[i] % 2 != 0){
            vetOdd.push(vet[i]);
        }
    }
    
    return vetOdd;
}


legalAge = vet => {
    let verification = true;
    for(var i = 0; i<vet.length; i++){
        if(vet[i] <= 18) verification = false;
    }
    
    return verification;
}


userNumber = (vet, userNum) => {
    let verification = true;
    for(var i = 0; i<vet.length; i++){
        if(vet[i] < userNum) verification = false;
    }

    return verification ? "Todas as idades são maiores ou iguais ao valor informado pelo usuário" : "Pelo menos uma das idades é menor que o valor informado pelo usuário"
}

displayAges = (vet, userNum) => {
    let vetMaxAge = [];
    for(var i = 0; i<vet.length; i++){
        if(vet[i] >= userNum) vetMaxAge.push(vet[i]);
    }

    return vetMaxAge;
}


avgMaxAge = maxAges => {
    let sum = 0;
    for(var i = 0; i<maxAges.length; i++){
        sum+=maxAges[i];
    }

    let avg = sum/maxAges.length;
    avg = avg.toFixed(2);

    return avg;
}
