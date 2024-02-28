window.addEventListener("load", function() {
    var vetAges = [10, 21, 31, 40];
    var userNum = prompt("Informe um número qualquer:", 21);
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
    var sum = 0;
    for (i=0; i<vet.length; i++) sum+=vet[i];
    
    return sum;
    }

avgAges = (sum, vet) => sum/vet.length;

maxAge = vet => {
    var maxAge = vet[0];
    for(var i = 0; i<vet.length; i++){
        if(vet[i]>maxAge){
            maxAge = vet[i];
        }
    }

    return maxAge;
}

// oddAge = vet => {
//     var vetOdd = [];
//     for(var i = 0; i<vet.length; i++){
//         if(vet[i] % 2 != 0){
//             vetOdd.push(vet[i]);
//         }
//     }
    
//     return vetOdd;
// }

oddAge = vet => {
    var vetOdd = vet.filter((index) => index % 2 != 0);

    return vetOdd;
}

// legalAge = vet => {
//     var verification = true;
//     for(var i = 0; i<vet.length; i++){
//         if(vet[i] <= 18) verification = false;
//     }
    
//     return verification;
// }

legalAge = vet => {
    var verification = vet.every((index) => index >= 18);

    return verification;
}

// userNumber = (vet, userNum) => {
//     var verification = true;
//     for(var i = 0; i<vet.length; i++){
//         if(vet[i] < userNum) verification = false;
//     }

//     return verification ? "Todas as idades são maiores ou iguais ao valor informado pelo usuário" : "Pelo menos uma das idades é menor que o valor informado pelo usuário"
// }

userNumber = (vet, userNum) => {
    var verification = vet.every((index) => index >= userNum);

    return verification ? "Todas as idades são maiores ou iguais ao valor informado pelo usuário" : "Pelo menos uma das idades é menor que o valor informado pelo usuário";
}

// displayAges = (vet, userNum) => {
//     var vetMaxAge = [];
//     for(var i = 0; i<vet.length; i++){
//         if(vet[i] >= userNum) vetMaxAge.push(vet[i]);
//     }

//     return vetMaxAge;
// }

displayAges = (vet, userNum) => {
    var vetMaxAge = vet.filter((index) => index >= userNum);

    return vetMaxAge;
}

// avgMaxAge = maxAges => {
//     var sum = 0;
//     for(var i = 0; i<maxAges.length; i++){
//         sum+=maxAges[i];
//     }

//     var avg = sum/maxAges.length;
//     avg = avg.toFixed(2);

//     return avg;
// }

avgMaxAge = displayAges => {
    var sum = displayAges.reduce((acc, index) => acc + index);
    var avg = sum/displayAges.length;
    avg = avg.toFixed(2);

    return avg;
}