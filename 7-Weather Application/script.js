apiKey = "19e93ec40e4fc9e42a233ca16c74aa51";
apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

searchBox = document.querySelector(".search-box input");
searchBtn = document.querySelector(".search-box button");
weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".card").style.display = "none";
  }
  else{
    let data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "&deg;C";
  
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
  
    document.querySelector(".card").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
  
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
