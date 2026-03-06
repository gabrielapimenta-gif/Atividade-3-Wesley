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
        case 1: total = preco * 0.90; break;
        case 2: total = preco * 0.95; break;
        case 3: total = preco; break;
        case 4: total = preco * 1.06; break; 
    }

    res.innerHTML = `Total a pagar: <strong>R$ ${total.toFixed(2)}</strong>`;
}