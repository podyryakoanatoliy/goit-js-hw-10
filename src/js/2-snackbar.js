import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', iziToastMessage);

iziToast.info({
        title: 'HELLO',
          message: `Welcome!`,
    position: 'topCenter',
    color: `#09f`,
    titleColor: '#fff',
        messageColor: '#fff',
      });
function iziToastMessage(event) {
    event.preventDefault();
    const delay = document.querySelector('input[name="delay"]').value;
    const state = document.querySelector('input[name="state"]:checked').value;

    

  createPromise(delay, state)
    .then(() => {
      iziToast.success({
        title: 'OK',
          message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight'
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight'
      });
    });
}


function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        state === 'fulfilled' ? resolve(`✅ Fulfilled promise in ${delay}ms`) : reject(`❌ Rejected promise in ${delay}ms`);
    }, delay);
  });
}