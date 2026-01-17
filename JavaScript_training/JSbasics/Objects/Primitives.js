let num = 10; // variable
function inc1(num){
    num++;
}
inc1(num); // not effect to org num because they share value (independent)
console.log(num);



let obj={value : 10} //object
function inc2(obj){
    obj.value++;
}
inc2(obj); // effect to org obj because they share refernce (dependent)
console.log(obj);
