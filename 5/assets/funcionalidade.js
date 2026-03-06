// 4. Par ou Ímpar
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

// 5. Ordem Decrescente
function ordenarValores() {
    const v1 = Number(document.getElementById('v1').value);
    const v2 = Number(document.getElementById('v2').value);
    const v3 = Number(document.getElementById('v3').value);
    const res = document.getElementById('res5');

    let lista = [v1, v2, v3];
    lista.sort((a, b) => b - a); // Ordena de forma decrescente

    res.innerHTML = `Ordem decrescente: <strong>${lista.join(' > ')}</strong>`;
}

// 6. Peso Ideal
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

// 7. Pagamento
function calcularPagamento() {
    const preco = parseFloat(document.getElementById('preco').value);
    const condicao = parseInt(document.getElementById('condicao').value);
    const res = document.getElementById('res7');
    let total = 0;

    if (isNaN(preco)) {
        res.innerHTML = "Insira o preço do produto.";
        return;
    }

    switch (condicao) {
        case 1: total = preco * 0.90; break; // 10% desconto
        case 2: total = preco * 0.95; break; // 5% desconto
        case 3: total = preco; break;        // Sem juros
        case 4: total = preco * 1.06; break; // 6% juros
    }

    res.innerHTML = `Total a pagar: <strong>R$ ${total.toFixed(2)}</strong>`;
}