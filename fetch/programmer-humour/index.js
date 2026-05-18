
async function app() {
   let data = await fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => {
        if(!response.ok) throw new Error("Response error");
        return response.json();
    })
    .catch(error=> { throw new error('Response error')});
    console.log(data);
const generateImageButton = document.createElement("button");
const divOfImage = document.createElement("div");
image = document.createElement("img");
image.src = `${data.img}`;
document.body.append(divOfImage);
document.body.append(generateImageButton);
generateImageButton.innerText = "Display";
generateImageButton.addEventListener("click",generate);
divOfImage.style.height = "300px";

function generate(){
    image.style.height = "100%";
    divOfImage.append(image);
}
}

window.onload = app;
