function escopeGlobal() {
    const elementTimer = document.querySelector('#timer');
    const buttonStart = document.querySelector('#start');
    const buttonPause = document.querySelector('#pause');
    const buttonReset = document.querySelector('#reset');
    const date = new Date(0);
    let timer;

    function startTimer(e){
        // e.preventDefault();
        if(elementTimer.classList.contains('pausado'))
            elementTimer.classList.remove('pausado')

       timer = setInterval(() => {
            date.setSeconds(date.getSeconds() + 1);
            elementTimer.textContent = formatDate(date);
        }, 1000);

        buttonStart.disabled = true;
    };

    function pauseTimer(e){
        // e.preventDefault();
        clearInterval(timer);
        elementTimer.textContent = formatDate(date);
        elementTimer.classList.add('pausado');
        buttonStart.textContent = 'Continuar';
        buttonStart.disabled = false;
    }

    function resetTimer(e){
        // e.preventDefault();
        clearInterval(timer);
        date.setTime(0);
        elementTimer.textContent = formatDate(date);
        
        if(elementTimer.classList.contains('pausado'))
            elementTimer.classList.remove('pausado')

        buttonStart.textContent = 'Iniciar';
        buttonStart.disabled = false;
    }

    buttonStart.addEventListener('click', startTimer);
    buttonPause.addEventListener('click', pauseTimer);
    buttonReset.addEventListener('click', resetTimer);

    function formatDate(date){
       return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    };
};

escopeGlobal();