function calcularIMC() {
    const peso = parseFloat(document.querySelector("#peso").value);
    const altura = parseFloat(document.querySelector("#altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.querySelector("#resultado").innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);
    document.querySelector("#resultado").innerText = `Seu IMC é: ${imc.toFixed(2)}`;
}