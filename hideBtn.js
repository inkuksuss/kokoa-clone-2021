const hideBtn = document.querySelector('.hideBtn');
const showBtn = document.querySelector('.showBtn');
const display = document.querySelector('.display');
const invisualBtn = document.querySelector('.channel-list__option-icon--hide');
const visualBtn = document.querySelector('.channel-list__option-icon--show');

function btnOff() {
    hideBtn.addEventListener('click', () => {
        display.classList.add('hide');
        invisualBtn.classList.toggle('hide');
        visualBtn.classList.toggle('hide');
    });
};

function btnOn() {
    showBtn.addEventListener('click', () => {
        display.classList.remove('hide');
        invisualBtn.classList.toggle('hide');
        visualBtn.classList.toggle('hide');
    });
};

function init() {
  btnOff();
  btnOn();  
};

init();
