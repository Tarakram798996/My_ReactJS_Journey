// "?." --> Optional Chaining

const user1 = {
    firstName: 'Tarak',
    lastName : 'Ram'
}
let user2;



// Object

//if user1 firstname is present = OK!
console.log(user1?.firstName);
//if user2 firstname is not present = undefined
console.log(user2?.firstName);
//if value is undefined we can add alternative name
console.log(user2?.firstName??'Guest');



// Nested Objects

const user3={
    name:{
        firstName : 'bhAAi'
    }
};
console.log(user3?.name?.firstName);
console.log(user3?.name?.lastName??'Guest');



// Function

const user4={
    greet(){
        return "Hi"
    }
}

console.log(user4?.greet());
console.log(user4?.sayHi?.()??'no Hi');