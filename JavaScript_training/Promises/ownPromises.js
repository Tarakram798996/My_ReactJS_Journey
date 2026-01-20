const myPromise= new Promise((resolve,reject)=>{
    let suc = false;
    if(suc){
        resolve("Done!!");
    }else{
        reject("Failed");
    }
});

myPromise.then((message)=>{
    console.log(message);
}).catch((mess)=>{
    console.log(mess);
})