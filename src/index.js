import WeatherController from './weather_controller.js';
import WeatherModel from './weather_model.js';
import View from './view.js';
import {API_KEY, URL} from './config.js';
import "./style.css";

const locationInput = document.getElementById("location_input");
const submit =  document.getElementById("btn_submit");



const waetherContainer = document.getElementById("weather_display_container");
const convertBtn = document.getElementById("convertBtn");


document.addEventListener("DOMContentLoaded", () => {
  const model = new WeatherModel(URL, API_KEY);
  const view = new View();
  const controller = new WeatherController(model, view);


    submit.addEventListener("click", function(e) {

        console.log("btn clicked");
        console.log(locationInput.value);


        controller.handleWeatherRequest(locationInput.value);

        //Controller does something based on user request.

        //In this case user wants to fetch weather data from API


    

});

    convertBtn.addEventListener("change", function(e) {

        if(e.target.checked){
            console.log("Clicked");
            controller.handleTempConversion();
        }else{
            

            controller.handleTempConversion();
            console.log("UnClicked");
            
        }

        });

   
});








