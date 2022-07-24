import jsonIcon from './icons.json' assert {type: "json" };


let btn = document.querySelector('button');
let Country = document.getElementById('country');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let icon = document.getElementById('icon');
let alerts = document.getElementById('alert');
let humidity = document.getElementById('humidity');
let tempF = document.getElementById('tempF');


function getIcon(num){
    for(let i = 0 ; i < 49 ; i++) { 
        if(jsonIcon[i].code === num) {
            let a = jsonIcon[i].icon;
            console.log(a);
            icon.src = `images/weather/64x64/all/${a}.png`
        }
    }
}




async function getWeather(location) {

    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5d49a58462d64f05b39174946222107&q=${location}&days=1&aqi=yes&alerts=no`, {mode : 'cors'})
    
    response.json().then(function (response) {
        console.log(response);
        alerts.innerText = response.current.condition.text;
        Country.innerText = response.location.country;  
        city.innerText = response.location.name;
        icon.src = "https:"+response.current.condition.icon
        temp.innerText = response.current.temp_c;  
        tempF.innerText = response.current.temp_f;  
        let humi = response.current.humidity
        humidity.innerText = `humidity ${humi}`
        alerts.innerText = response.current.condition.text;  

       
    });
   
   
    
};



btn.addEventListener("click", function(){
    let search = document.querySelector('input').value;
    getWeather(search);
});

