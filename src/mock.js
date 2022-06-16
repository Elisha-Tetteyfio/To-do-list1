export const removve = (i, allTasks) => {
  allTasks.splice(i, 1);
  return (allTasks);
};

export const addTask = (a, allTasks) => {
  allTasks.push(a);
  a.index = allTasks.indexOf(a);
  return (allTasks);
};

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
  return(allTasks);
};
