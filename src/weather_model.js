export default class WeatherModel {

    constructor(url, apiKey) {

        this.url = url;

        this.apiKey = apiKey;

        this.weatherData = null;

        this.unit = "F";

    }

       


    async fetchWeather(location) {

 

            const url = `${this.url}${location}?key=${this.apiKey}`;

            console.log("Request URL " , url);

            //Requqest sent to API with fetch.
            const response = await fetch(url);


                if(!response.ok) {

                console.log("ERROR : cant fetch data");
            }
            
            
            const data = await response.json()

            this.weatherData =  data;

            if(this.weatherData != null && this.unit == "F"){

                
          return {
            
            address :  data.address,
            timezone: data.timezone,
            description : data.description,
            date : data.currentConditions.datetime,
            avg_temperature : data.days[0].temp,
            feelsLike : data.days[0].feelslike,
            currentTemp : data.currentConditions.temp

          }

                 
                

            }else if(this.weatherData != null && this.unit == "C"){

                this.convertToCelsius();
                
            }

            console.log(this.weatherData);


            console.log(data);
            

            
           


          //Return response from API call.


          return {
            
            address :  data.address,
            timezone: data.timezone,
            description : data.description,
            date : data.currentConditions.datetime,
            avg_temperature : data.days[0].temp,
            feelsLike : data.days[0].feelslike,
            currentTemp : data.currentConditions.temp

          }
       
        
        }


        async convertToCelsius() {
            const day = this.weatherData.days[0];

            const avg_temp = (day.temp - 32) * 5 / 9;
            const curr_temp = (this.weatherData.currentConditions.temp - 32) * 5 / 9;
            const feelsLike = (day.feelslike - 32) * 5 / 9;


            this.weatherData.currentConditions.temp = curr_temp;
            this.weatherData.days[0].feelslike = feelsLike;
            this.weatherData.days[0].temp = avg_temp;
         

            this.unit = "C";

            //console.log("avg:", avg_temp);
            //console.log("current:", curr_temp);
           // console.log("feelsLike:", feelsLike);
           // console.log("date:", this.weatherData.currentConditions.datetime);
           // console.log("description:", this.weatherData.description);


            return {

            address :  this.weatherData.address,
            timezone: this.weatherData.timezone,
            description : this.weatherData.description,
            date : this.weatherData.currentConditions.datetime,
            avg_temperature : avg_temp,
            feelsLike : feelsLike,
            currentTemp : curr_temp


            }
}


     async convertToFarenheit() {
            const day = this.weatherData.days[0];

            const avg_temp = (day.temp * 9) / 5  + 32 ;
            const curr_temp = (this.weatherData.currentConditions.temp * 9) / 5 + 32;
            const feelsLike = (day.feelslike * 9 ) / 5 + 32

           
            this.weatherData.currentConditions.temp = curr_temp;
            this.weatherData.days[0].feelslike = feelsLike;
            this.weatherData.days[0].temp = avg_temp;

            this.unit = "F";

           // console.log("avg:", avg_temp);
           // console.log("current:", curr_temp);
            //console.log("feelsLike:", feelsLike);
            //console.log("date:", this.weatherData.currentConditions.datetime);
           // console.log("description:", this.weatherData.description);


            return {

            address :  this.weatherData.address,
            timezone: this.weatherData.timezone,
            description : this.weatherData.description,
            date : this.weatherData.currentConditions.datetime,
            avg_temperature : avg_temp,
            feelsLike : feelsLike,
            currentTemp : curr_temp


            }
}


    

}