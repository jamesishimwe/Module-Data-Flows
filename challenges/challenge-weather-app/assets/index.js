async function getWeather() {
  let city = "london";
  let info = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=944c7d6eb18c20b5227a1d6028578e05`
  )
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Error");
    });
  let query = info.weather[0].description;
  let images = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=rFjekzFfQzet2DcZuW1kKXe8n9DHZHkp4zy2xGSbV3o`
  )
    .then((response) => response.json())
    .catch((error) => {
    throw new Error("Error");
    });
    let imageArray = [];
    
  let links = images.results;
  for(let i =0;i<links.length;i++)
    {
        imageArray.push(links[i].urls.full);
        
    }
  const figure = document.getElementById("photo");
  const button = document.createElement("button");
  document.querySelector(".info").append(button);
  document.querySelector("#conditions").innerText =
  info.weather[0].description + "\n" + city;
  button.innerText = "Next";
  button.style.position = "absolute";
  button.style.left = "50%";
  button.style.bottom = "40px";
  button.style.borderRadius = "10px";
  const imageFigure = document.createElement("img");
  imageFigure.id = "imageFigure";
  figure.append(imageFigure);
  imageFigure.style.height = "100%";
  imageFigure.style.width = "100%";
  let img = 0;
  imageFigure.src = imageArray[0];
  button.addEventListener("click", () => {
    img = imageArray.indexOf(imageFigure.src) ;
    imageFigure.src = imageArray[img + 1];
  });
  const smallDiv = document.getElementById("smallImages");
  const div = document.querySelector(".controls");

  smallDiv.style.width = "1000px";
  let small = Array(links.length);

  for (let i = 0; i < links.length; i++) {
    small[i] = document.createElement("img");
    small[i].src = links[i].urls.small;
    const width = 1000 / links.length;
    small[i].style.width = width.toString() + "px";
    smallDiv.append(small[i]);
    const url = links[i].urls.full;
    small[i].addEventListener("click", () => {
      document.getElementById("imageFigure").src = url;
    });
  }
  const divHTML = div.innerHTML;
  const search = document.querySelector(".btn");
  search.style.position = "absolute";
  const input = document.getElementById("search-tf");
  input.style.position = "absolute";
  input.style.left = "60px";
  search.style.width = "40px";
  search.addEventListener("click", async () => {
    let city = document.getElementById("search-tf").value;
    let info = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=944c7d6eb18c20b5227a1d6028578e05`
    )
      .then((response) => response.json())
      .catch((error) => {
        throw new Error("Error");
      });
    let query = info.weather[0].description;
    let images = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=rFjekzFfQzet2DcZuW1kKXe8n9DHZHkp4zy2xGSbV3o`
    )
      .then((response) => response.json())
      .catch((error) => {
        throw new Error("Error");
      });
      imageArray = [];
    let links = images.results;
    for(let i =0;i<links.length;i++)
    {   
        imageArray.push(links[i].urls.full);

        
    }
    document.querySelector("#conditions").innerText =
      info.weather[0].description + "\n" + city;
    imageFigure.src = imageArray[0];
    let small = [];
    smallDiv.innerHTML = "";
    for (let i = 0; i < links.length; i++) {
      small[i] = document.createElement("img");
      small[i].src = links[i].urls.small;
      const width = 1000 / links.length;
      small[i].style.width = width.toString() + "px";
      smallDiv.append(small[i]);
      const url = imageArray[i];
      small[i].addEventListener("click", () => {
    document.getElementById("imageFigure").src = url;
        img = i;

});
    }
  });
}
getWeather();
