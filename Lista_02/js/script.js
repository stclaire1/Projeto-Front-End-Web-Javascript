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
    var sum = vet.reduce((acc, index) => acc + index);
    
    return sum;
}

avgAges = (sum, vet) => sum/vet.length;

maxAge = vet => {
    vet.reduce((max, current) => {
        return max > current ? max : current;
    });
}

oddAge = vet => {
    var vetOdd = vet.filter((index) => index % 2 != 0);

    return vetOdd;
}

legalAge = vet => {
    var verification = vet.every((index) => index >= 18);

    return verification;
}

userNumber = (vet, userNum) => {
    var verification = vet.every((index) => index >= userNum);

    return verification ? "Todas as idades são maiores ou iguais ao valor informado pelo usuário" : "Pelo menos uma das idades é menor que o valor informado pelo usuário";
}

displayAges = (vet, userNum) => {
    var vetMaxAge = vet.filter((index) => index >= userNum);

    return vetMaxAge;
}

avgMaxAge = displayAges => {
    var sum = displayAges.reduce((acc, index) => acc + index);
    var avg = sum/displayAges.length;
    avg = avg.toFixed(2);

    return avg;
} 