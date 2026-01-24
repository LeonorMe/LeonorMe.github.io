const formCalc = document.getElementById("form-calcular");
const resposta = document.getElementById("custo-total");

function calculate(consumo, preco, km, extra, pessoas) {
    let custo = 0;

    custo = (parseFloat(consumo * km * preco / 100) + parseFloat(extra)) / parseFloat(pessoas);

    return custo;
}

formCalc.addEventListener('submit', (e) =>
{
    e.preventDefault();

    let consumo = document.getElementById("consumo-medio").value;
    let preco = document.getElementById("preco-combustivel").value;
    let km = document.getElementById("km").value;
    let extra = document.getElementById("extra").value;
    let pessoas = document.getElementById("pessoas").value;
    
    let custo = calculate(consumo, preco, km, extra, pessoas);
    console.log(custo = Math.round(custo * 100)/100);
    resposta.innerHTML = custo + '€';

})

