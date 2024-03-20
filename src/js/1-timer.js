import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


let userSelectedDate;
let milliseconds;
let days;
let hours;
let minutes;
let seconds;

const input = document.querySelector('#datetime-picker');
const timerValue = document.querySelectorAll(".value");
const currentDate = Date.now();
const startBtn = document.querySelector('[data-start]');
startBtn.setAttribute('disabled', '');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
//   minDate: currentDate,
    onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
        console.log(selectedDates[0]);
        if (userSelectedDate < currentDate) {
    iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Please choose a date in the future`,
      });
        } else {
            startBtn.removeAttribute('disabled', '');

        }
  },
};

flatpickr(input, options);

startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', '');
    input.setAttribute('disabled', '');
    const intervalId = setInterval(() => {
        const carrentTime = Date.now();
        milliseconds = userSelectedDate.getTime() - carrentTime;
        
        timerValue[0].textContent = days.toString().padStart(2, '0');
        timerValue[1].textContent = hours.toString().padStart(2, '0');
        timerValue[2].textContent = minutes.toString().padStart(2, '0');
        timerValue[3].textContent = seconds.toString().padStart(2, '0');

        if (milliseconds < 1000) {
            startBtn.removeAttribute('disabled', '');
            clearInterval(intervalId);
        };
  }, 1000);
});



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  days = Math.floor(ms / day);
  // Remaining hours
  hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  seconds = Math.floor((((ms % day) % hour) % minute) / second);

    
  return { days, hours, minutes, seconds };
}

