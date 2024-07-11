import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

const daysLabel = document.querySelector('[data-days]');
const hoursLabel = document.querySelector('[data-hours]');
const minutesLabel = document.querySelector('[data-minutes]');
const secondsLabel = document.querySelector('[data-seconds]');

let userSelectedDate;
let countdownInterval;

startButton.disabled = true;
startButton.style.backgroundColor = 'grey';
startButton.style.cursor = 'not-allowed';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0].getTime();

    if (userSelectedDate <= options.defaultDate.getTime()) {
       iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        color: '#ef4040',
        messageColor: '#fff',
        titleColor: '#fff',
        iconColor: '#fff',
        position: 'topRight',
      });
      startButton.disabled = true;
      startButton.style.backgroundColor = 'grey';
      startButton.style.cursor = 'not-allowed';
    } else {
      startButton.disabled = false;
      startButton.style.backgroundColor = 'blue';
      startButton.style.cursor = 'pointer';
    }
  },
};

startButton.addEventListener('click', onCountTime);

function onCountTime() {
  
  startButton.disabled = true;
  startButton.style.backgroundColor = 'grey';
  startButton.style.cursor = 'not-allowed';
  input.disabled = true;
input.style.cursor = 'not-allowed';
    
    
  countdownInterval = setInterval(() => {
    const timeRemaining = userSelectedDate - Date.now();

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
        iziToast.success({
        title: 'OK',
          message: `✅ Countdown finished!`,
        position: 'topRight'
      });
        input.disabled = false;
        input.style.cursor = 'pointer';
      return;
    }

    convertMs(timeRemaining);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = String(Math.floor(ms / day));
  const hours = String(Math.floor((ms % day) / hour));
  const minutes = String(Math.floor(((ms % day) % hour) / minute));
  const seconds = String(Math.floor((((ms % day) % hour) % minute) / second));

  daysLabel.innerHTML = days.padStart(2, '0');
  hoursLabel.innerHTML = hours.padStart(2, '0');
  minutesLabel.innerHTML = minutes.padStart(2, '0');
  secondsLabel.innerHTML = seconds.padStart(2, '0');
}

flatpickr("#datetime-picker", options);