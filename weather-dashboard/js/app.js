$(document).ready(function() {

    $("#searchBtn").click(function() {
        let city = $("#cityInput").val().trim();

        if(city === "") {
            $("#error").text("Please enter a city name");
            $("#result").html("");
            return;
        }

        $("#error").text("");
        $("#result").html("Loading...");

        $.ajax({
            url: BASE_URL,
            method: "GET",
            data: {
                q: city,
                appid: API_KEY,
                units: "metric"
            },
            success: function(response) {
                let temp = response.main.temp;
                let weather = response.weather[0].description;
                let mainWeather = response.weather[0].main;
                let cityName = response.name;

                let iconPath = "";

                if (mainWeather === "Clear") {
                    iconPath = "assets/sunny.png";
                } 
                else if (mainWeather === "Rain") {
                    iconPath = "assets/rainy.png";
                } 
                else if (mainWeather === "Clouds") {
                    iconPath = "assets/cloudy.png";
                } 
                else {
                    iconPath = "assets/cloudy.png"; 
                }

                $("#result").html(`
                    <h2>${cityName}</h2>
                    <img src="${iconPath}" alt="weather icon" width="100">
                    <p>Temperature: ${temp} °C</p>
                    <p>Condition: ${weather}</p>
                `);
            },
            error: function() {
                $("#result").html("");
                $("#error").text("City not found or API error!");
            }
        });
    });

});
