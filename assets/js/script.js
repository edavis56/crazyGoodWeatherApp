const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]

const inputValue = document.querySelector('.inputValue');
const button = document.getElementById('button');
const apiCall ='8da85a6d0e1088800fd5735017425db3'

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const standardFormat =  hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12  ? 'PM' : 'AM'

    timeEl.innerHTML = standardFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = weekDay[day]+', '+date+' '+months[month]
    
}, 1000);


button.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+apiCall)
    .then(response => response.json())
    .then(data => {
        console.log(data.coord.lat)
        console.log(data.coord.lon)

        var lat = data.coord.lat;
        var lon = data.coord.lon;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apiCall}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showDayZero(data)
            showDayOne(data)
            showDayTwo(data)
            showDayThree(data)
            showDayFour(data)
            showDayFive(data)
        })
    })

.catch(err => alert("wrong city!"))
});


function showDayZero (data){
    let {temp, humidity, wind_speed, uvi} = data.current;

    dayZero.innerHTML = 
    `<div>
        <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png"
    </div>
    <div class="weather-item">
        <div>Temperature:</div>
        <div>${temp}&#176</div>
    </div>
    <div class="weather-item">
        <div>Humidity:</div>
        <div>${humidity} %</div>
    </div>
    <div class="weather-item">
        <div>Wind:</div>
        <div>${wind_speed} MPH</div>
    </div>
    <div class="weather-item">
        <div>UV Index:</div>
        <div>${uvi}</div>
    </div>`;
}

function showDayOne (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[0];

    dayOne.innerHTML = 
    `<div>
        <img src="http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png"
    </div>
    <div class="weather-item">
        <div>Temperature:</div>
        <div>${temp.day}&#176</div>
    </div>
    <div class="weather-item">
        <div>Humidity:</div>
        <div>${humidity} %</div>
    </div>
    <div class="weather-item">
        <div>Wind:</div>
        <div>${wind_speed} MPH</div>
    </div>
    <div class="weather-item">
        <div>UV Index:</div>
        <div>${uvi}</div>
    </div>`;  
}

function showDayTwo (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[1];

    dayTwo.innerHTML = 
    `<div>
        <img src="http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png"
    </div>
    <div class="weather-item">
        <div>Temperature:</div>
        <div>${temp.day}&#176</div>
    </div>
    <div class="weather-item">
        <div>Humidity:</div>
        <div>${humidity} %</div>
    </div>
    <div class="weather-item">
        <div>Wind:</div>
        <div>${wind_speed} MPH</div>
    </div>
    <div class="weather-item">
        <div>UV Index:</div>
        <div>${uvi}</div>
    </div>`;  
    var {temp, humidity, wind_speed, uvi} = data.daily[1];
}

function showDayThree (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[2];

    dayThree.innerHTML = 
    `<div>
        <img src="http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png"
    </div>
    <div class="weather-item">
        <div>Temperature:</div>
        <div>${temp.day}&#176</div>
    </div>
    <div class="weather-item">
        <div>Humidity:</div>
        <div>${humidity} %</div>
    </div>
    <div class="weather-item">
        <div>Wind:</div>
        <div>${wind_speed} MPH</div>
    </div>
    <div class="weather-item">
        <div>UV Index:</div>
        <div>${uvi}</div>
    </div>`;  
    var {temp, humidity, wind_speed, uvi} = data.daily[1];
}

function showDayFour (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[3];

    dayFour.innerHTML = 
    `<div>
        <img src="http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png"
    </div>
    <div class="weather-item">
        <div>Temperature:</div>
        <div>${temp.day}&#176</div>
    </div>
    <div class="weather-item">
        <div>Humidity:</div>
        <div>${humidity} %</div>
    </div>
    <div class="weather-item">
        <div>Wind:</div>
        <div>${wind_speed} MPH</div>
    </div>
    <div class="weather-item">
        <div>UV Index:</div>
        <div>${uvi}</div>
    </div>`;  
    var {temp, humidity, wind_speed, uvi} = data.daily[1];
}

function showDayFive (data) {
    var {temp, humidity, wind_speed, uvi} = data.daily[4];

    dayFive.innerHTML = 
    `<div>
        <img src="http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png"
    </div>
    <div class="weather-item">
        <div>Temperature:</div>
        <div>${temp.day}&#176</div>
    </div>
    <div class="weather-item">
        <div>Humidity:</div>
        <div>${humidity} %</div>
    </div>
    <div class="weather-item">
        <div>Wind:</div>
        <div>${wind_speed} MPH</div>
    </div>
    <div class="weather-item">
        <div>UV Index:</div>
        <div>${uvi}</div>
    </div>`;  
    var {temp, humidity, wind_speed, uvi} = data.daily[1];
}
