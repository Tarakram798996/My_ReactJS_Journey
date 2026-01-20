const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true';
fetch(apiUrl)
    .then((response)=>{
        if(!response.ok){
            throw new Error("Something wrong :: "+response.status);
        }
        return response.json();
    })
    .then(data=>{
        console.log("Temperature :: "+data.current_weather.temperature);
    })
    .catch(error=>{
        console.log("Error!!");
    })
    .finally(()=>{
        console.log("Settled");
    })