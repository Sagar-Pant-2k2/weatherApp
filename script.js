const appid = "c9e2547ea35876f2057f85479cfd0e94";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//search_button
console.log("hello world");
const searchButton = document.querySelector(".bttn");
const cityName = document.querySelector(".cName");
const temprature = document.querySelector(".temp");
const city = document.querySelector('.city');
const windSpeed = document.querySelector('.Wind-speed');
const humidity = document.querySelector('.humidity');
const weatherImage = document.querySelector('.weather-icon');
searchButton.addEventListener('click',()=>{
    console.log(cityName.value);
    const request = (apiUrl + cityName.value + `&appid={appid}`);
    fetch(apiUrl + cityName.value + `&appid=${appid}`)
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        if(data.cod==404){
            console.log("not found");
            
               document.querySelector(".error").style.display
 = "block";             
 document.querySelector(".weather").style.display = "none";
        }
        else {
            document.querySelector(".error").style.display
 = "none";  
            console.log(data);
            temprature.innerHTML = (data.main.temp+"° C");
            city.innerHTML = (data.name);
            windSpeed.innerHTML = data.wind.speed + "km/h";
            humidity.innerHTML = data.main.humidity;
            weatherImage.textContent
            if(data.weather[0].main == "Clouds"){
                weatherImage.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherImage.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherImage.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherImage.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherImage.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherImage.src = "images/mist.png";
            }
            document.querySelector(".weather").style.display = "block";
        }

    })
    .catch(err=>{
        console.log("error");
        // console.log(data);
    
    });

});
