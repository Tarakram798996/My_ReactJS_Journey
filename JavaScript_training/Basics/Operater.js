let a=10;
let b=5;

//Arithmetic
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Assignment
c=10;
c+=2;
c-=3;
c*=5;
console.log(c);

//Comparison
console.log(a===b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

//equaility
console.log('1'===1);  //false
console.log('1'==1);   //true

//ternary
console.log(a>b?"a is big":"b is big");

//logical with boolean
console.log(true&&false);
console.log(true||false);
console.log(!false);

//logical without boolean
// falsy ==> undefined, null, 0, false, '', Nan
//other anything is true
console.log(false||1||2);
console.log(true&&0);
console.log(false || 'ram');