function escopeGlobal() {
    const elementTimer = document.querySelector('#timer');
    const buttonStart = document.querySelector('#start');
    const date = new Date(0);
    let timer;

    document.addEventListener('click', function (e) {
        const element = e.target;

        console.log(element);

        if (element.id === 'start') {
            if (elementTimer.classList.contains('pausado'))
                elementTimer.classList.remove('pausado');

            timer = setInterval(() => {
                date.setSeconds(date.getSeconds() + 1);
                elementTimer.textContent = formatDate(date);
            }, 1000);

            buttonStart.disabled = true;
        } else if (element.id === 'pause') {
            clearInterval(timer);
            elementTimer.textContent = formatDate(date);
            elementTimer.classList.add('pausado');
            buttonStart.textContent = 'Continuar';
            buttonStart.disabled = false;
        } else if (element.id === 'reset') {
            clearInterval(timer);
            date.setTime(0);
            elementTimer.textContent = formatDate(date);

            if (elementTimer.classList.contains('pausado'))
                elementTimer.classList.remove('pausado')

            buttonStart.textContent = 'Iniciar';
            buttonStart.disabled = false;
        }
    })

    function formatDate(date) {
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    };
};

escopeGlobal();