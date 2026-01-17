//creating array
const arr = [2];

//add at end
arr.push(3,4);

//add at beginning
arr.unshift(0,1);

//add at middle
arr.splice(2,0,'a','b');


//finding the element (premitive)
console.log(arr.indexOf('a'));

//remove at end
let ele1 = arr.pop();

//remove at beginning
let ele2 = arr.shift();

//remove at middle
let ele3=arr.splice(2,1);
console.log(arr);