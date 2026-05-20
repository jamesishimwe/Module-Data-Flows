async function getWeather()
{
    
    let city = "london";
    let info = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=944c7d6eb18c20b5227a1d6028578e05`)
    .then(response=>response.json())
    .catch(error=>{throw new Error("Error")});
    let query = info.weather[0].description;
    let images = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=rFjekzFfQzet2DcZuW1kKXe8n9DHZHkp4zy2xGSbV3o`)
    .then(response=>response.json())
    .catch(error=>{throw new Error("Error")});
    let links = images.results;
const figure = document.getElementById("photo");
const button = document.createElement("button");
document.querySelector(".info").append(button);
document.querySelector("#conditions").innerText =info.weather[0].description + "\n" + city ; 
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

const search = document.querySelector(".btn");
search.style.position = "absolute";
const input = document.getElementById("search-tf");
input.style.position = "absolute";
input.style.left = "60px";
search.style.width = "40px";
search.addEventListener('click', async()=>{
    
let city = document.getElementById("search-tf").value;    
let info = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=944c7d6eb18c20b5227a1d6028578e05`)
    .then(response=>response.json())
    .catch(error=>{throw new Error("Error")});
   let query = info.weather[0].description;
    let images = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=rFjekzFfQzet2DcZuW1kKXe8n9DHZHkp4zy2xGSbV3o`)
    .then(response=>response.json())
    .catch(error=>{throw new Error("Error")});
    let links = images.results;
     document.querySelector("#conditions").innerText =info.weather[0].description + "\n" + city ; 
     imageFigure.src= links[0].urls.full;
});

}
getWeather();