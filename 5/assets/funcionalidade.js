function ordenarValores() {
    const v1 = Number(document.getElementById('v1').value);
    const v2 = Number(document.getElementById('v2').value);
    const v3 = Number(document.getElementById('v3').value);
    const res = document.getElementById('res5');

    let lista = [v1, v2, v3];
    lista.sort((a, b) => b - a);

    res.innerHTML = `Ordem decrescente: <strong>${lista.join(' > ')}</strong>`;
}