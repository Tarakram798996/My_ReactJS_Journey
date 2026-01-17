const numbers=[0,-11,1,-1,2,-3,3,2,1,99];

const a=numbers.map((num)=> '<li>'+num+'</li>');

const item=numbers
.filter((n)=> n>0)
.map((n)=> ({value:n}))
.filter((n)=> n.value>1)
.map((n)=> n.value);

// console.log(a.join(' '));
console.log(item);