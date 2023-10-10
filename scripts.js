const searchInputValue = document.getElementById('searchInputValue')
const searchBtn = document.getElementById('searchBtn')
const city =  document.getElementById('city')
const temp = document.getElementById('temp')
const rain = document.getElementById('rain')
const humidity = document.getElementById('humidity')




searchBtn.addEventListener('click',function() {
   fetch('https://api.openweathermap.org/data/2.5/weather?zip='+searchInputValue.value+'&appid=24ebeba4d6a4f1c2c6aa3fe9c59b9f0b&units=imperial')
    .then( response => response.json())
    .then( data=> {
       const cityValue = data['name']
       const tempValue = data['main']['temp'];
       const humidityValue = data['main']['humidity'];
       const rainValue = data['rain'];
       
       if (rainValue === undefined){
         rain.style.display = "none"
      }
      
      city.innerhtml ="City: " + cityValue
      temp.innerHTML = Math.trunc(tempValue) + "&#176F"
      humidity.innerHTML ="Humidity: " + humidityValue + "%"  
      rain.innerHTML = "Precipitation: " + Math.trunc(rainValue) + "%"
      
   })
      
   
   
    .catch(error => alert('Error'))
   
   } )