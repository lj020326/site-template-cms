// JS Goes here - ES6 supported
import Siema from 'siema';

const mySiema = new Siema({
  selector: '.gallery-carousel',
  duration: 200,
  easing: 'ease',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: true
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
