export const removve = (i, allTasks) => {
  allTasks.splice(i, 1);
  return (allTasks);
};

export const addTask = (a, allTasks) => {
  allTasks.push(a);
  a.index = allTasks.indexOf(a);
  return (allTasks);
};