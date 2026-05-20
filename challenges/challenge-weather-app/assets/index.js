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
    console.log(images.results);
    const links = images.results;
const figure = document.getElementById("photo");
const button = document.createElement("button");
document.querySelector(".info").append(button);
button.innerText = "Next";
button.style.position = "absolute";
button.style.left = "50%";
button.style.bottom = "40px";
button.style.borderRadius = "10px";
const imageFigure = document.createElement("img");
figure.append(imageFigure);
imageFigure.style.height = "100%";
imageFigure.style.width = "100%";
let img = 0;
imageFigure.src= links[0].urls.full;
button.addEventListener('click', ()=>{
     img += 1;
    if(img === links.length) img =0;
    console.log(imageFigure.src);
    imageFigure.src = links[img].urls.full;


});


}
getWeather();