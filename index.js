const numbersButtons = document.querySelectorAll('.number');
let lastClicked = null;
const submitButton = document.querySelector('.btn');

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('number')) {
        if (lastClicked && lastClicked !== el) {
            lastClicked.classList.remove('new-color'); // Remove a classe do último botão clicado
        }
        el.classList.add('new-color'); //Adiciona a classe ao botão atual
        lastClicked = el; //Atualiza a referência para o último botão clicado
        localStorage.setItem('lastClicked', lastClicked.value);
    }
});


submitButton.addEventListener('click', (e) =>{
    if(lastClicked){
        alert('Do you want to continue?')
        window.location.href = 'rating.html';
    }else{
        alert('Choose one of the options!')
    }
});

localStorage.setItem('lastClicked', 'lastClicked');
