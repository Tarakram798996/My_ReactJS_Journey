showAddress=(address)=>{
    for(let keys in address){
        console.log(address[keys]);
    }
}

function areEqual(x,y){
    for(let key in x){
        if(x[key]!==y[key]) return false;
    }
    return true;
}

function areSame(x,y){
    return x===y;
}

//1. create a address object and display its variable using Factory function
function getAddress(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    }
}
const obj1=getAddress("Yoyo","Guntur",522019);
showAddress(obj1);

//2. create a address object and display its variable using constructor function
function Address(street,city,zipCode) {
    this.street=street,
    this.city= city,
    this.zipCode= zipCode
}

const obj2 = new Address('Ms','tenali',522201);
showAddress(obj2);

//3. Object Equality
const a=new Address('a','b',1);
const b=new Address('a','b',1);
const c=a;
console.log(areEqual(a,b));
console.log(areSame(a,b));
console.log(areSame(a,c));