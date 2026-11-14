const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const resultado = document.querySelector('#resultado');

const mostrar = (conta) => {
    resultado.textContent = `Resultado: ${conta}`;
};

const calcular = (operacao) => {
    const valor1 = n1.valueAsNumber;
    const valor2 = n2.valueAsNumber;

    if (Number.isNaN(valor1) || Number.isNaN(valor2)) {
        resultado.textContent = 'Erro: Informe os dois números.';
        return;
    }

    if (operacao === 'dividir' && valor2 === 0) {
        resultado.textContent = 'Erro: Divisão por zero não é permitida.';
        return;
    }

    const operacoes = {
        somar: valor1 + valor2,
        subtrair: valor1 - valor2,
        multiplicar: valor1 * valor2,
        dividir: valor1 / valor2,
    };

    mostrar(operacoes[operacao]);
};

document.querySelector('#somar').addEventListener('click', () => calcular('somar'));
document.querySelector('#subtrair').addEventListener('click', () => calcular('subtrair'));
document.querySelector('#multiplicar').addEventListener('click', () => calcular('multiplicar'));
document.querySelector('#dividir').addEventListener('click', () => calcular('dividir'));