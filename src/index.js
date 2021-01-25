import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');

btnStartRef.addEventListener('click', onStartClick);
btnStopRef.addEventListener('click', onStopClick);

function colorChange(){
  bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
};

let timerId = null;
let started = false;

function onStartClick(){
  if(started){
    return;
  };
  started = true;
  btnStartRef.style.color = 'white';
  timerId = setInterval(colorChange, 1000);
};
function onStopClick(){
  started = false;
  btnStartRef.style.color = 'black';
  bodyRef.style.backgroundColor = '';
  clearInterval(timerId);
};
