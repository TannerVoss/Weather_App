let weather = {
    "apiKey": "6bd6fa6d9621676f05170682d9fbdbff",
    fetchWeather: function(city) {
        fetch(
                "http://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=imperial&appid=" +
                this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data; //extracts name
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = "Current Condition: " + description;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temperature").innerText = temp + " °F ";
        document.querySelector(".humidity").innerText = "Humidity is: " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind Speed of: " + speed + " mph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        document.querySelector(".weatherReport").classList.remove("loading");

    },
    search: function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }


};


document
    .querySelector(".search button")
    .addEventListener("click", function() {
        weather.search();
    });

document.querySelector(".searchbar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

//need help here!

document.querySelector(".homeSet").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {

    }
})

weather.fetchWeather("London");