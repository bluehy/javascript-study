// openweather API : https://openweathermap.org/api
// API : 다른 서버와 data를 주고받을 수 있는 방법

const API_KEY = `df288711221e9c638230c00f24c18005`;

const onGeoFound = (position) => {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   console.log(`You live in`, lat, lon);
   // API로 data 응답받기
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   console.log(url);
   // fetch(url)로 network에 url 불러내기 
   // 서버의 응답을 기다려 data를 받아오는 시간이 필요. (then을 사용하는 이유)
   // json 으로 data를 받아온다.
   fetch(url).then(response => response.json()).then(data => {
      // console.log(data.name, data.weather[0].main);
      const city = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      temp.innerText = data.main.temp + `℃`;
      weather.innerText = data.weather[0].main;
   });

};

const onGeoError = () => {
   alert("위치 정보를 찾지 못했습니다. 날씨 정보를 제공할 수 없습니다.")
}

// geolocationposition MDN : https://developer.mozilla.org/ko/docs/Web/API/GeolocationPosition
// navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
navigator.geolocation.getCurrentPosition(onGeoFound,onGeoError)
