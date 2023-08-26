const API_KEY = "59ff5d968a61c49d7661dbdb600eb069";

/**
 *
 * @param {GeolocationPosition} position
 */
function onGeoSuccess(position) {
  const crd = position.coords;
  const lat = crd.latitude;
  const lng = crd.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Cant find you!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
