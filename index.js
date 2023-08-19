
// Esta função é chamada quando um botão numérico ou de operador é clicado na calculadora.
// Ela obtém o conteúdo atual do elemento com o ID 'resultado', que provavelmente é onde a entrada da calculadora é exibida.
// A função então concatena o número (ou operador) clicado à entrada atual.
// Isso atualiza a exibição na calculadora com a entrada atualizada.
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;




// Ela remove o último caractere da entrada da calculadora.
// Ela obtém o conteúdo atual do elemento com o ID 'resultado', e então redefine o conteúdo para uma substring que exclui o último caractere.
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

// Esta função é chamada quando o botão de igual é clicado, realizando o cálculo.
// Ela obtém o conteúdo atual do elemento com o ID 'resultado'.
// Se a entrada não estiver vazia, ela usa a função eval() para avaliar a expressão matemática contida na entrada e atualiza o elemento de resultado com o resultado do cálculo.
// Se a entrada estiver vazia, ela exibe um erro no elemento 'resultado'.
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
// Esta função é chamada quando o botão "limpar" é clicado.
// Ela simplesmente redefine o conteúdo do elemento com o ID 'resultado' para uma string vazia, limpando a tela da calculadora.
// Em resumo, essas funções implementam as funcionalidades básicas de uma calculadora simples: inserção de números e operadores, cálculo, limpeza da tela e remoção do último caractere. No entanto, é importante notar que o uso da função eval() para avaliar expressões pode ser arriscado e potencialmente inseguro, principalmente se a calculadora for utilizada em ambientes não confiáveis.
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}