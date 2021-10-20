const onGeoFound = (position) => {
   const lat = position.coords.latitude;
   const lng = position.coords.longitude;
   console.log(`You live in`, lat, lng);
};

const onGeoError = () => {
   alert("위치 정보를 찾지 못했습니다. 날씨 정보를 제공할 수 없습니다.")
}

// geolocationposition MDN : https://developer.mozilla.org/ko/docs/Web/API/GeolocationPosition
// navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
navigator.geolocation.getCurrentPosition(onGeoFound,onGeoError)