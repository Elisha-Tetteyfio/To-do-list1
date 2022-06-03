// import _ from 'lodash';
import './style.css';
import enterIcon from './Icons/enter.png';
import syncIcon from './Icons/synchronize.svg';
import menuIcon from './Icons/menu.png';

const sync1 = document.querySelector('#sync1');
const ic1 = `<img src="${syncIcon}" alt="o"></img>`;
sync1.innerHTML += ic1;
const enter1 = document.querySelector('#enter1');
const ec1 = `<img src="${enterIcon}" alt="v" id="enterIcon"></img>`;
enter1.innerHTML += ec1;

const tasks = [
  {
    description: 'What to do',
    completed: false,
    index: 0,
  },
  {
    description: 'Wake up',
    completed: false,
    index: 1,
  },
  {
    description: 'Code',
    completed: false,
    index: 2,
  },
  {
    description: 'Go to sleep',
    completed: false,
    index: 3,
  },
];

let tasksHTML = '';
tasks.forEach((el) => {
  tasksHTML += `
  <li class="listItem taskItem"> 
  <div>
    <input type="checkbox" name="check" id="check">
    <label for="check">${el.description}</label> 
  </div>
  <div class="iconContainer">
    <img src = "${menuIcon}" alt="x"></img>
  </div>
  </li>
`;
});

const contentUl = document.querySelector('#contentUl');
contentUl.innerHTML += tasksHTML;
