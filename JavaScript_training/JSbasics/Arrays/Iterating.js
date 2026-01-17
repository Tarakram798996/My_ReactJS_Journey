const arr=[1,2,3,4,5,6,7,8,9];

for(let i of arr){
    console.log(i);
}

arr.forEach((number,idx)=>{
    console.log(number+" "+idx);
});