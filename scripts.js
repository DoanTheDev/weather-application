const searchInputValue = document.getElementById('searchInputValue')
const searchBtn = document.getElementById('searchBtn')
const city =  document.getElementById('city')
const temp = document.getElementById('temp')
const imgage= document.getElementById('img')
const humidity = document.getElementById('humidity')
const descript = document.getElementById('description')


    searchBtn.addEventListener('click',function() {
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchInputValue.value +',US&appid=24ebeba4d6a4f1c2c6aa3fe9c59b9f0b&units=imperial')
      .then( response => response.json())
      .then( data => {
        const cityValue = data['name']
        const tempValue = data['main']['temp']
        const humidityValue = data.main['humidity']
        const icon1 = data.weather[0].icon
        const descriptText=data.weather[0].description
    
        descriptText.innerHTML = descriptText.charAt(0).toUpperCase() + descriptText.slice(1)
        imgage.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon1}@2x.png'>`
        city.innerHTML = "City: " + cityValue
        temp.innerHTML = Math.trunc(tempValue) + "&#176F"
        humidity.innerHTML = "Humidity: " + humidityValue + "%"  
       }
        )
     .catch( err => alert('Please enter a valid zipcode or state'))  
      
  
  })

 
