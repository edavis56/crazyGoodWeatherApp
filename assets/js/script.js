const date = new Date()
const todayDate = date.toDateString()
const time = date.toLocaleTimeString()
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
const inputValue = document.querySelector('.inputValue');
const button = document.getElementById('button');
const apiCall ='8da85a6d0e1088800fd5735017425db3'


button.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+apiCall)
    .then(response => response.json())
    .then(data => {
        var lat = data.coord.lat;
        var lon = data.coord.lon;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apiCall}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            currentDay(data)
            firstDay(data)
            secondDay(data)
            thirdDay(data)
            fourthDay(data)
            fifthDay(data)
        })
    })
});

function currentDay (data){
    let {temp, humidity, wind_speed, uvi} = data.current;
    today.innerHTML = 
    `<header>
        <h5 id="todayDate" class="card-title">Local Time: ${todayDate} ${time}</h5>
    </header>
    <div class="card" style="width: 18rem;">
         <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Temperature: ${temp}&#176</h5>
            <h5 class="card-title">Humidity: ${humidity} %</h5>
            <h5 class="card-title">Wind: ${wind_speed} MPH</h5>
            <h5 class="card-title">UV Index: ${uvi}</h5>
        </div>
    </div>`;
}

function firstDay (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[0];
    day1.innerHTML = 
    `<div class="card" style="width: 12rem;">
         <img src="http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Temperature: ${temp.day}&#176</h5>
            <h5 class="card-title">Humidity: ${humidity} %</h5>
            <h5 class="card-title">Wind: ${wind_speed} MPH</h5>
            <h5 class="card-title">UV Index: ${uvi}</h5>
        </div>
    </div>` 
}

function secondDay (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[1];

    day2.innerHTML = 
    `<div class="card" style="width: 12rem;">
         <img src="http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Temperature: ${temp.day}&#176</h5>
            <h5 class="card-title">Humidity: ${humidity} %</h5>
            <h5 class="card-title">Wind: ${wind_speed} MPH</h5>
            <h5 class="card-title">UV Index: ${uvi}</h5>
        </div>
    </div>` 
   }

function thirdDay (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[2];

    day3.innerHTML = 
    `<div class="card" style="width: 12rem;">
         <img src="http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Temperature: ${temp.day}&#176</h5>
            <h5 class="card-title">Humidity: ${humidity} %</h5>
            <h5 class="card-title">Wind: ${wind_speed} MPH</h5>
            <h5 class="card-title">UV Index: ${uvi}</h5>
        </div>
    </div>`
    }

function fourthDay (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[3];

    day4.innerHTML = 
    `<div class="card" style="width: 12rem;">
         <img src="http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png"class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Temperature: ${temp.day}&#176</h5>
            <h5 class="card-title">Humidity: ${humidity} %</h5>
            <h5 class="card-title">Wind: ${wind_speed} MPH</h5>
            <h5 class="card-title">UV Index: ${uvi}</h5>
        </div>
    </div>`
   }

function fifthDay (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[4];

    day5.innerHTML = 
    `<div class="card" style="width: 12rem;">
         <img src="http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png"class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Temperature: ${temp.day}&#176</h5>
            <h5 class="card-title">Humidity: ${humidity} %</h5>
            <h5 class="card-title">Wind: ${wind_speed} MPH</h5>
            <h5 class="card-title">UV Index: ${uvi}</h5>
        </div>
    </div>`
}
