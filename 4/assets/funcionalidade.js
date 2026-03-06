function verificarParImpar() {
    const num = document.getElementById('numParImpar').value;
    const res = document.getElementById('res4');
    
    if (num === "") {
        res.innerHTML = "Por favor, digite um número.";
        return;
    }

    const resultado = (num % 2 === 0) ? "PAR" : "ÍMPAR";
    res.innerHTML = `O número ${num} é <strong>${resultado}</strong>.`;
}