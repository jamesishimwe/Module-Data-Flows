async function generate() {
    let image = await fetch("https://dog.ceo/api/breeds/image/random")
    .then(response=>response.json())
    .catch(error=>{throw new Error("Error")});
   img.src = image.message;
}
 const btn = document.getElementById("btn");
    const list  = document.getElementById("list");
    const img  = document.createElement("img");
    img.style.height = "100%";
    
    list.append(img);
    btn.addEventListener("click",generate);
