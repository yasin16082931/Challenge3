
// api voor weer
var apiCallWeather = 'https://api.openweathermap.org/data/2.5/weather?q='
var weatherAPI = "&appid=3d84aea90fa6fc62c396fb46e278aab2";
var celsius = "&units=metric";

// api voor het vragen van afbeeldingen
var apiCallImg = 'https://api.unsplash.com/search/photos?page=1&query=';
var imgAPI = '&client_id=pg2b4-WqI5n9BENUiDtS8OxOrDNkT6nJIPQ1SCDFylg';

// api die vraagt naar vertaling van hallo
var apiCallHallo = 'https://fourtonfish.com/hellosalut/?cc=';

var city = "";


// functie die je moet gebruiken van j5
function setup(){
  var click = document.getElementById('btn');
  var weatherUrl= "";
  var imgUrl = "";
  click.addEventListener("click", function(){
    city = document.getElementById('cityName').value;

    weatherUrl = apiCallWeather + city + celsius + weatherAPI;
    imgUrl = apiCallImg + city + imgAPI;
    console.log(weatherUrl);
    console.log(imgUrl);
    loadJSON(weatherUrl, weather);
    loadJSON(imgUrl, setBackground);
  });
}

// krijgen van de data
function weather(data){
  console.log(data);
  var temp = data.main.temp;
  var wind = data.wind.speed;
  var sight = data.visibility;
  var land = data.sys.country;
  setWeather(temp, wind, sight);
  var helloUrl = apiCallHallo + land.toLowerCase();
  console.log(helloUrl);
  loadJSON(helloUrl, setHallo);


}

// het in de html zetten
function setWeather(te, wi, si){
  document.getElementById('temp').innerHTML = te + "℃";
  document.getElementById('wind').innerHTML = wi + "m/s";
  document.getElementById('sight').innerHTML = si + "meter";
}


// de achtergrond veranderen door de api request die een land nodig heeft
function setBackground(imgData){
  console.log(imgData);
  var get = imgData.results;
  var backgroundUrl = "url('"+get[0].urls.regular+"')";


  var background = document.querySelector(".background");
  console.log(background);
  background.style.backgroundImage = backgroundUrl;

}

// functie geeft hello terug ik het land van de stad die jij intyped
function setHallo(lang){
  document.getElementById('hallo').innerHTML = lang.hello;

}
