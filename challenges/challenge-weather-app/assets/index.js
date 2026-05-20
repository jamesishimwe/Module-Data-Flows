async function getWeather()
{
    let info = await fetch("http://api.openweathermap.org/data/2.5/weather?q=london&APPID=944c7d6eb18c20b5227a1d6028578e05")
    .then(response=>response.json())
    .catch(error=>{throw new Error("Error")});
    console.log(info.weather[0].description);
    let query = info.weather[0].description;
    let images = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=rFjekzFfQzet2DcZuW1kKXe8n9DHZHkp4zy2xGSbV3o`)
    .then(response=>response.json())
    .catch(error=>{throw new Error("Error")});
    console.log(images);
}
getWeather();