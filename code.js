let btn = document.querySelector("button");
let Country = document.getElementById("country");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let alerts = document.getElementById("alert");
let humidity = document.getElementById("humidity");
let tempF = document.getElementById("tempF");

async function getWeather(location) {
  let response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=5d49a58462d64f05b39174946222107&q=${location}&days=1&aqi=yes&alerts=no`,
    { mode: "cors" }
  );

  response.json().then(function (response) {
    if (response.error) {
      alert(response.error.message);
    }
    alerts.innerText = response.current.condition.text;
    Country.innerText = response.location.country;
    city.innerText = response.location.name;
    icon.src = "https:" + response.current.condition.icon;
    temp.innerText = response.current.temp_c;
    tempF.innerText = `fehren ${response.current.temp_f}`;
    humidity.innerText = `humidity ${response.current.humidity}`;
    alerts.innerText = response.current.condition.text;
  });
}

btn.addEventListener("click", function () {
  let search = document.querySelector("input").value;
  getWeather(search);
});
