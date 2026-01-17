//1. big in 2 numbers
function findBig(num1,num2){
    if(num1>num2) console.log('a is bigger');
    else console.log('b is bigger');
}

findBig(24,99);

//2. Land Scape
function isLandScape(width,height){
    return width>height;
}

console.log(isLandScape(800,600));

//3.FizzBuzz

function fizzBuzz(num){
    if(num%3===0 && num%5===0){
        console.log('fizzbuzz');
    }else if(num%3===0){
        console.log('Fizz');
    }else{
        console.log('Buzz');
    }
}

fizzBuzz(5);

//4. Demerit point
function checkSpeed(speed){
    if(speed>=70){
        let cal=Math.floor((speed-70)/5);
        if(cal>=12){
            console.log('Your are SUSPENDED');
            return;
        }
    }
    console.log('Your Good');
}

checkSpeed(85);

//5. Even Or Odd
function showNumbers(limit){
    for(let i=0;i<=limit;i++){
        if(i%2==0) console.log(i,'Even');
        else console.log(i,'Odd');
    }
}

showNumbers(10);

//6. Count Truthy
function countTruthy(array){
    let count=0;
    for(let val of array){
        if(val) count++;
    }
    return count;
}

array=['Tarak',undefined,1,2,3,0,false];
console.log(countTruthy(array));

//7. String Properties
function showProperties(obj){
    for(let key in obj)
        if(typeof obj[key] === 'string' )
            console.log(key+" : "+obj[key]);      
}
let obj={
    title:'a',
    year:2013,
    rating:3.5,
    hero:'ram'
}
showProperties(obj);

//8. Sum of Multiples 3 and 5
function sum(limit){
    let res=0;
    for(let i=1;i<=limit;i++){
        if(i%3===0 || i%5===0){
            res+=i;
        }
    }
    return res;
}
console.log(sum(10));

//9. Gread of student
function calculateGrade(marks){
    let avg=0;
    for(let mark of marks){
        avg+=mark;
    }
    avg=avg/marks.length;
    if(avg>=90) console.log('A');
    else if(avg >= 80) console.log('B');
    else if(avg >= 70) console.log('C');
    else if(avg >= 60) console.log('D');
    else console.log('F');
}
marks=[80,100,100];
calculateGrade(marks);

//10. stars
function showStars(n){
    for(let i=1;i<=n;i++){
        console.log('*'.repeat(i));
    }
}
showStars(5);

//11. prime numbers upto limit
function showPrime(limit){
    for(let i=0;i<=limit;i++){
        let fact=0;
        for(let j=1;j<=i;j++){
            if(i%j==0) fact++;
        }
        if(fact==2) console.log(i);
    }
}
showPrime(20);