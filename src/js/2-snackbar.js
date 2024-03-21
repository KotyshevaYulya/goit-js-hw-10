'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('[name = delay]');
const radios = document.querySelectorAll('input[type="radio"]')
const submit = document.querySelector('.form');
let milliseconds;
let radioValue;

input.addEventListener('input', (event) => {
    milliseconds = event.currentTarget.value;
});

submit.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

     for (let radio of radios) {
         if (radio.checked) {
             radioValue = radio.value;
        }
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(milliseconds, radioValue);
            if (radioValue === 'fulfilled') {
                resolve(milliseconds);
            } else {
                reject(milliseconds);
            }
        }, milliseconds);
    });

    // Registering promise callbacks
  promise
    .then(value => {
      iziToast.success({
        color: 'green',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${milliseconds}ms`,
      });
    })
    .catch(error => {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `❌ Rejected promise in ${milliseconds}ms`,
      });
    });

};

