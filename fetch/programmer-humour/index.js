
async function xkcd() {
   let data = await fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => {
        if(!response.ok) throw new Error("Response error");
        return response.json();
    })
    .catch(error=> { throw new Error('Response error')});
    console.log(data);
const generateImageButton = document.createElement("button");
const divOfImage = document.createElement("div");
image = document.createElement("img");
image.src = `${data.img}`;
document.body.append(divOfImage);
document.body.append(generateImageButton);
generateImageButton.innerText = "Display Meme";
generateImageButton.addEventListener("click",generate);
divOfImage.style.height = "300px";
divOfImage.style.background = "rgb(214, 246, 248)";
divOfImage.style.marginTop = "10px";

function generate(){
    image.style.height = "100%";
    divOfImage.append(image);
}
}
async function jokeGenerator() {
   
    let response = await fetch("https://v2.jokeapi.dev/joke/Any")
    .then(apiResonse=>{
        if(!apiResonse.ok) throw new Error("Response error");
        return apiResonse.json();
    })
    .catch(error=>{throw new Error('Response error')});
    const jokeDiv = document.createElement("div");
    jokeDiv.style.height = "300px";
    jokeDiv.style.backgroundColor = "lightblue";
    document.body.append(jokeDiv);
    button = document.createElement("button");
    document.body.append(button);
    button.innerText = "Display joke";
    jokeParagraph  = document.createElement("p");
    let joke = false;
    jokeDiv.append(jokeParagraph);
    
    console.log(response);
    button.addEventListener("click",()=>{
        if(response.type === "twopart" && joke ===false)
        {   jokeDiv.style.background = "linear-gradient(to bottom,lightblue,darkblue)";
            jokeParagraph.innerText = `${response.setup}`;
              
            button0 = document.createElement("button");
            button0.innerText = "Delivery";
            jokeDiv.append(button0);
            let delivery = false;
            button0.addEventListener("click",()=>{
            if(delivery === false){
                jokeParagraph0 = document.createElement("p");
              jokeDiv.append(jokeParagraph0);
              jokeParagraph0.innerText = `${response.delivery}`;
                delivery = true;
            }
            });
            joke = true;
             
        }
        else if(response.type === "single")
        {
            jokeParagraph.innerText = `${response.joke}`;        }
    });
    

}


function app()
{
    xkcd();
    jokeGenerator();
   

}
window.onload = app;
