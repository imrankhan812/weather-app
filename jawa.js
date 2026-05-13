    const apiKey = "b5cafc62869a3dab153abdacff43f96f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "weather-icon.webp";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"; // Agar aapke paas rain ki image hai
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather-icon.webp";
    }
    else if(data.weather[0].main == "Mist" || data.weather[0].main == "Haze"){
        weatherIcon.src = "mist.png";
    }
    
}

// Ye line sab se zaroori hai button chalane ke liye:
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
    
    
 