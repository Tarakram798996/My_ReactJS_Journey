function Circle(radius){
    this.radius=radius,
    this.draw=function(){
        console.log('draw');
    }
}

//creating Object 
const circle1=new Circle(10);
console.log(Circle);


//object using function
const Circle2 = new Function('radius',`
    this.radius=radius,
    this.draw=function(){
        console.log('draw');
    }
    `);
const obj = new Circle2(10);
console.log(obj);

//calling object
Circle2.call({},1);
Circle2.apply({},[1,2,3,4]);