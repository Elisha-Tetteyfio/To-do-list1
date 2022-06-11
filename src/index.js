// import _ from 'lodash';
import './style.css';
// import { filter } from 'lodash';
import enterIcon from './Icons/enter.png';
import syncIcon from './Icons/synchronize.svg';
import Task from './modules/Task.js';
import {
  removve, clearInput, addTask, updateTasks,
} from './modules/functioning.js';
import { removeChecked, setCheck } from './modules/interactive.js';

const sync1 = document.querySelector('#sync1');
const ic1 = `<img src="${syncIcon}" alt="o"></img>`;
sync1.innerHTML += ic1;
const enter1 = document.querySelector('#enter1');
const ec1 = `<img src="${enterIcon}" alt="v" id="enterIcon"></img>`;
enter1.innerHTML += ec1;
const clearButton = document.createElement('button');
clearButton.classList.add('clearButton');
clearButton.innerHTML = 'Clear all completed';

const getTasks = () => {
  let task;
  if (localStorage.getItem('allTasks') === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem('allTasks'));
  }
  return task;
};

const allTasks = getTasks();

const contentUl = document.querySelector('#contentUl');

updateTasks(contentUl, allTasks);

const checkLabel = document.querySelectorAll('.checkLabel');
checkLabel.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.target.setAttribute('contenteditable', true);
    const id = parseInt(e.target.parentNode.parentNode.id, 10);

    document.addEventListener('keypress', (ee) => {
      if (ee.key === 'Enter') {
        e.preventDefault();
        e.target.setAttribute('contenteditable', false);
        allTasks[id].description = e.target.innerHTML;
        updateTasks(contentUl, allTasks);
      }
    });
  });
});

let inp = document.querySelector('#inputTask');

document.addEventListener('keypress', (e) => {
  inp = document.querySelector('#inputTask');
  if (e.key === 'Enter' && inp.value !== '') {
    e.preventDefault();
    addTask(new Task(inp.value), allTasks);
    updateTasks(contentUl, allTasks);
    clearInput(inp);
    window.location.reload();
  }
});

const deleteTask = document.querySelectorAll('.del');

deleteTask.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let { id } = e.target.parentNode.parentNode;
    id = parseInt(id, 10);
    removve(id, allTasks);
    updateTasks(contentUl, allTasks);
    window.location.reload();
  });
});

contentUl.after(clearButton);

const aa = setCheck(allTasks);
aa.forEach((el) => {
  document.querySelector(`#check${el}`).checked = true;
  allTasks[el].completed = true;
});

const checkBox = document.querySelectorAll('.check');
checkBox.forEach((el) => {
  const id = parseInt(el.parentNode.parentNode.id, 10);
  el.addEventListener('change', () => {
    if (el.checked) {
      allTasks[id].completed = true;
    } else {
      allTasks[id].completed = false;
    }
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
  });
});

clearButton.addEventListener('click', () => {
  removeChecked(allTasks);
  updateTasks(contentUl, allTasks);
  window.location.reload();
});