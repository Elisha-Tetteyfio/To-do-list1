import trashIcon from '../Icons/trash.svg';

export const clearInput = (inp) => {
  inp.value = '';
};

export const addTask = (a, allTasks) => {
  allTasks.push(a);
  a.index = allTasks.indexOf(a);
};

export const removve = (i, allTasks) => {
  allTasks.splice(i, 1);
};

export function updateTasks(contentUl, allTasks) {
  let tasksHTML = '';
  allTasks.forEach((el) => {
    const taskID = allTasks.indexOf(el);
    el.index = taskID;
    tasksHTML += `
    <li class="listItem taskItem" id="${taskID}"> 
      <div>
        <input type="checkbox" name="check" id="check${taskID}" class="check">
        <label for="check${taskID}"  class = "checkLabel">${el.description}</label> 
      </div>
      <div class="iconContainer">
        <img src = "${trashIcon}" alt="x" class="del"></img>
      </div>
    </li>
  `;
  });
  contentUl.innerHTML = '';
  contentUl.innerHTML += tasksHTML;
  localStorage.setItem('allTasks', JSON.stringify(allTasks));
}