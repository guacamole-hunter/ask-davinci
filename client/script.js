import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300) //repeat every 300ms
}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval (() => {
    if(index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20) // 20 ms
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumer = Math.random();
  const hexString = randomNumer.toString(16);

  return 'id-${timestamp}-${hexString}';
}