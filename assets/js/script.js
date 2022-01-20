function global() {
    const weight = document.querySelector('#weight');
    const height = document.querySelector('#height');
    const submit = document.querySelector('#btn');


    submit.addEventListener('click', function () {
        const weightValue = Number(weight.value);
        const heightValue = Number(height.value);


        if (!weightValue || weightValue > 500 || weightValue <= 0) {
            setResultado('Peso inválido', '#ff5e5e');
            return
        }
        if (!heightValue || heightValue <= 0) {
            setResultado('Altura inválida', '#ff5e5e');
            return
        }

        const imc = calculoImc(weightValue, heightValue);
        const imcResult = getImc(imc);
        
        setResultado(`Seu IMC é ${imc.toFixed(2)}(${imcResult})`, '#5feeb7');
        console.log(imc);

    });

    function setResultado(msg, isValid) {
        const answer = document.querySelector('#answer');
        answer.innerHTML = msg;
        answer.style.backgroundColor = isValid;
        answer.style.color = color;
    }


    function calculoImc(weight, height) {
        return weight / (height * height);
    }


    function getImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc < 18.5) {
            return nivel[0];
        } else if (imc < 24.9) {
            return nivel[1];
        } else if (imc < 29.9) {
            return nivel[2];
        } else if (imc < 34.9) {
            return nivel[3];
        } else if (imc < 39.9) {
            return nivel[4];
        } else {
            return nivel[5];
        }
    }



}

global()