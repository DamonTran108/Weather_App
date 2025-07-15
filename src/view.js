export default class View {


    //Update DOM elements and screen....



    async displayWeather(data) {

        console.log("Trying to find container");

        const weatherDisplay = document.getElementById("weather_display_container");

  

          console.log("Found   container" , weatherDisplay);

        const title =  document.getElementById("location");

        const date =  document.getElementById("time");

        const avg_temp = document.getElementById("avg_temp");

        const feelsLike = document.getElementById("feelsLike");

        const actualTemp = document.getElementById("actualTemp");

        const conditions = document.getElementById("condition");


        title.textContent  = data.address;
        avg_temp.textContent = data.avg_temperature;
        actualTemp.textContent = data.currentTemp;
        feelsLike.textContent = data.feelsLike;
        date.textContent = data.date;
        conditions.textContent = data.description;


        //console.log(data.address);
        //console.log(data.avg_temperature);
        console.log(data.currentTemp);
        console.log(data.feelsLike);
        console.log(data.date);
        //console.log(data.description);



   
   
    }

    
}