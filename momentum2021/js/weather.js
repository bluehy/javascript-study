const onGeoFound = (position) => {
   console.log(position);
};

const onGeoError = () => {
   alert("위치 정보를 찾지 못했습니다. 날씨 정보를 제공할 수 없습니다.")
}


// navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
navigator.geolocation.getCurrentPosition(onGeoFound,onGeoError)