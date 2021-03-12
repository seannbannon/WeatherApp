
// connect API
var API_KEY = "b42a4ac95d61c2fc1af2e2a492b72075"
var URL = "api.openweathermap.org/data/2.5/forecast?q="

function searchApi(e){
    e.preventDefault()
    console.log(e.target.form1.value)
    var cityName = e.target.form1.value
    $.ajax(URL + cityName + "&appid=" + API_KEY)
    .then (function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })
}

// get 5 day forecast
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

// cnt = 1 limits most recent time stamp

$("form").submit(searchApi)