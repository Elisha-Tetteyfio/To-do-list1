import { removve, addTask} from './mock.js';

describe("Test the remove functionality", () => {
  test("testing 'remove' function", () => {
    let a =[1,2,3,4,5];
    let b = 1;
    expect(removve(b,a)).toEqual([1,3,4,5])
  });
})

describe("Test the add functionality", () => {
  test("testing 'addTask' function", () => {
    let a =[1,2,3,4,5];
    let b = {};
    expect(addTask(b,a)).toEqual([1,2,3,4,5,{index:5}])
  });
  test("testing 'addTask' function", () => {
    let a =[1,2,3];
    let b = {};
    expect(addTask(b,a)).toEqual([1,2,3,{ index:3}])
  });
})




