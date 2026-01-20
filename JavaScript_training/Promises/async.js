const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true';
async function myFunction() {
    try{
        const response=await fetch(apiUrl);
        if(!response.ok){
            console.log("error");
            throw new Error("Wrong!!"+response.status);
        }
        const data=await response.json();
        console.log("Temperature :: "+data.current_weather.temperature);
    }catch(er){
        console.log(er);
    }finally{
        console.log("Settled");
    }
}

myFunction()