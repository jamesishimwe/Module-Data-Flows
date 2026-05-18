let data;
async function fetchData() {
    data = await fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => {
        if(!response.ok) throw new Error("Response error");
        return response.json();
    })
    .catch(error=> { throw new error('Response error')});
    console.log(data);
}
fetchData();