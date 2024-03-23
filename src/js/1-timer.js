import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


let userSelectedDate;

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
            startBtn.removeAttribute('disabled');

        }
  },
};

flatpickr(input, options);

startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', '');
    input.setAttribute('disabled', '');
    const intervalId = setInterval(() => {
        const carrentTime = Date.now();
        const milliseconds = userSelectedDate.getTime() - carrentTime;
      const timer = convertMs(milliseconds);

        timerValue[0].textContent = timer.days.toString().padStart(2, '0');
        timerValue[1].textContent = timer.hours.toString().padStart(2, '0');
        timerValue[2].textContent = timer.minutes.toString().padStart(2, '0');
        timerValue[3].textContent = timer.seconds.toString().padStart(2, '0');
        if (milliseconds < 1000) {
            startBtn.removeAttribute('disabled', "true");
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
 const days = Math.floor(ms / day);
  // Remaining hours
 const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    
  return { days, hours, minutes, seconds };
}

