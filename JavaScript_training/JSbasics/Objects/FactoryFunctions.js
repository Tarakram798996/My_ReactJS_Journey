function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('drow');
        }
    }
}
let obj=createCircle(132);
console.log(obj);