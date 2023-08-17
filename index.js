// Esta função é chamada quando um botão numérico ou de operador é clicado na calculadora.
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

// Essa função é chamada quando o botão "limpar" é clicado. 

// Essa função é associada ao botão "voltar" e remove o último caractere da entrada da calculadora.
//  Ela recupera o conteúdo do elemento HTML com o ID 'resultado', que deve conter uma expressão matemática



}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = ":/ error"
    }
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}