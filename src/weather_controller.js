export default class WeatherController {

    constructor(model, view) {


        this.model = model;

        this.view = view;
    }



    async handleWeatherRequest(location) {

        //Fucntion to handle weatehr requests from user ionput on view.

        try{
            const data = await this.model.fetchWeather(location);
            
             this.view.displayWeather(data);
        } catch (error) {
            alert("Cant complete request");
        }
       

        
    }


    async handleTempConversion() {

        var convertedData = null;

       if(this.model.unit == "F"){

      

          convertedData = await this.model.convertToCelsius();

  
        
       }else{


         convertedData = await this.model.convertToFarenheit();


        



       }

        this.view.displayWeather(convertedData);

       
        console.log("TYPE : " , this.model.unit);
        
    }
        


    
}