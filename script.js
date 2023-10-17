function sim() {
    alert("Você aceitou me dar o precioso!! (finalmente)")
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.top = geraPosicao(0, 90);
    btn.style.right = geraPosicao(0, 90);
    console.log("opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%"
}