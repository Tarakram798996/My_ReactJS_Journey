const circle={
    radius:1,
    draw(){
        console.log('drow');
    }
};

// const another = {};
// for(let key in circle){
//     another[key]=circle[key];
// }

//const another = Object.assign({},circle);

const another = { ...circle};
circle['radius']=10;
console.log(another);