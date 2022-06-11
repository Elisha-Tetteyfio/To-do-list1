import { removve } from './functioning.js';

export const setCheck = (allTasks) => {
  const arr = [];
  allTasks.forEach((el) => {
    if (el.completed) {
      arr.push(el.index);
    }
  });
  return (arr);
};

export const removeChecked = (allTasks) => {
  const arr = setCheck(allTasks);
  arr.reverse();
  arr.forEach((el) => {
    removve(el, allTasks);
  });
};
