import { removve, addTask, removeChecked, updateTasks } from './mock.js';

describe('Test the remove functionality', () => {
  test("testing 'remove' function", () => {
    const allTasks = [1, 2, 3, 4, 5];
    const a = 1;
    expect(removve(a, allTasks)).toEqual([1, 3, 4, 5]);
  });

  test("testing 'remove' function", () => {
    const allTasks = [
      { des: 'Task 1' },
      { des: 'Task 2' },
      { des: 'Task 3' },
    ];
    const a = 1;
    expect(removve(a, allTasks)).toEqual([{ des: 'Task 1' }, { des: 'Task 3' }]);
  });
});

describe('Test the add functionality', () => {
  test("testing 'addTask' function", () => {
    const allTasks = [1, 2, 3, 4, 5];
    const i = {};
    expect(addTask(i, allTasks)).toEqual([1, 2, 3, 4, 5, { index: 5 }]);
  });

  test("testing 'addTask' function", () => {
    const allTasks = [
      { des: 'Task 1' },
      { des: 'Task 2' },
      { des: 'Task 3' },
    ];
    const i = { des: 'Task 4' };
    expect(addTask(i, allTasks)).toEqual([
      { des: 'Task 1' },
      { des: 'Task 2' },
      { des: 'Task 3' },
      { des: 'Task 4', index: 3 },
    ]);
  });
});


describe("Testing 'clear all completed'", () => {
  test("testing 'removeChecked' function - when some tasks are completed", () =>{
    const allTasks = [
      { des: 'Task 1', completed: false, index: 0 },
      { des: 'Task 2', completed: true, index: 1 },
      { des: 'Task 3', completed: false, index: 2 },
    ];  
    const newAllTasks = [
      { des: 'Task 1', completed: false, index: 0 },
      { des: 'Task 3', completed: false, index: 2 },
    ];
    expect(removeChecked(allTasks)).toEqual(newAllTasks);
  });
  test("testing 'removeChecked' function - when all tasks are not completed", () =>{
    const allTasks = [
      { des: 'Task 1', completed: false, index: 0 },
      { des: 'Task 2', completed: false, index: 1 },
      { des: 'Task 3', completed: false, index: 2 },
    ];  
    const newAllTasks = [
      { des: 'Task 1', completed: false, index: 0 },
      { des: 'Task 2', completed: false, index: 1 },
      { des: 'Task 3', completed: false, index: 2 },
    ];
    expect(removeChecked(allTasks)).toEqual(newAllTasks);
  }),
  test("testing 'removeChecked' function - when all tasks are completed", () =>{
    const allTasks = [
      { des: 'Task 1', completed: true, index: 0 },
      { des: 'Task 2', completed: true, index: 1 },
      { des: 'Task 3', completed: true, index: 2 },
    ];  
    const newAllTasks = [];
    expect(removeChecked(allTasks)).toEqual(newAllTasks);
  })
})
