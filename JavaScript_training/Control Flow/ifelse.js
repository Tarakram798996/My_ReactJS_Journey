let a=10;
let b=20;
let c=15;

//simple if
if(a>5){
    console.log('a is larger than 5');
}

//if eles
if(a>5){
    console.log('a is larger than 5');
}else{
    console.log('a is smaller than 5');
}

//if else ladder
if(a==5){
    console.log('a is 5');
}else if(a==6){
    console.log('a is 6');
}else if(a==10){
    console.log('a is 10');
}else{
    console.log(' a is somthing');
}

//nested if
if(a>b){
    if(a>c){
        console.log('a is biggest');
    }else{
        if(c>b){
            console.log('c is biggest');
        }
    }
}else{
    if(b>c){
        console.log('b is biggest');
    }else{
        if(c>a){
            console.log('c is biggest');
        }
    }
}