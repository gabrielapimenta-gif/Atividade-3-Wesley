function calcularPeso() {
    const h = parseFloat(document.getElementById('altura').value);
    const sexo = document.getElementById('sexo').value;
    const res = document.getElementById('res6');
    let pesoIdeal = 0;

    if (isNaN(h)) {
        res.innerHTML = "Insira uma altura válida.";
        return;
    }

    if (sexo === "M") {
        pesoIdeal = (72.7 * h) - 58;
    } else {
        pesoIdeal = (62.1 * h) - 44.7;
    }

    res.innerHTML = `Seu peso ideal é: <strong>${pesoIdeal.toFixed(2)} kg</strong>`;
}