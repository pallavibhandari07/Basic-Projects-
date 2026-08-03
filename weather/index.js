async function fetchdata() {

    let city = document.querySelector("#city").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2dd68336955cf02e477d723142b98b35&units=metric`;
    try {

        let response = await fetch(url);
        let data = await response.json();
        if(data.cod === "404"){
            alert("City not found");
            return;
        }
        display(data);
    } catch(error) {
        console.log(error);
        alert("Something went wrong");

    }

}
function display(data) {
    let main = document.querySelector("#ms1");
    main.innerHTML = `
        <h3>Coordinates 📍</h3>
        <p>Longitude : ${data.coord.lon}</p>
        <p>Latitude : ${data.coord.lat}</p>`;



    let main2 = document.querySelector("#ms2");
    main2.innerHTML = `
        <h3>Weather ☁️</h3>
        <p>Climate : ${data.weather[0].main}</p>
        <p>Description : ${data.weather[0].description}</p>`;

    let m3 = document.querySelector("#m2");
    m3.innerHTML = `
        <h3>Temperature 🌡️</h3>
        <p>Humidity : ${data.main.humidity}%</p>
        <p>Temperature : ${data.main.temp} °C</p>
        <p>Low : ${data.main.temp_min} °C</p>
        <p>High : ${data.main.temp_max} °C</p>`;



    let m4 = document.querySelector("#m3");
    m4.innerHTML = `
        <h3>Condition 🌍</h3>
        <p>Country : ${data.sys.country}</p>
        <p>City : ${data.name}</p>
        <p>Timezone : ${data.timezone}</p>
        <p>
        Sunrise : ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
        </p>

        <p>
        Sunset : ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}
        </p>`;

}