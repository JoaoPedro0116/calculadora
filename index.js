
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado !== "") {
        try {
            var resultadoCalculado = eval(resultado);
            if (!isNaN(resultadoCalculado)) {
                document.getElementById('resultado').innerHTML = resultadoCalculado;
            } else {
                document.getElementById('resultado').innerHTML = "Erro";
            }
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = ":/ error";
    }
}

// Função para calcular a raiz quadrada
function calcularRaizQuadrada() {
    var resultado = document.getElementById('resultado');
    var expressao = resultado.innerText;
    try {
        var numero = parseFloat(expressao);
        if (!isNaN(numero)) {
            resultado.innerText = Math.sqrt(numero);
        } else {
            resultado.innerText = 'Erro';
        }
    } catch (error) {
        resultado.innerText = 'Erro';
    }
}

function insert(value) {
    var resultado = document.getElementById('resultado');
    resultado.innerText += value;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}