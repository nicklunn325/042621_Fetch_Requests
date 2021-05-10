




























// code to fetch Apis List and Display only those with no Cors and no Auth
const apiUrl = "https://api.publicapis.org/entries"
let current = 0;
let apisArray = [];

document.addEventListener("DOMContentLoaded", initialize)

function initialize(){
   fetchApis()
}

function fetchApis(){
    fetch(apiUrl)
    .then(res => res.json())
    .then(apiData => {
        apiData.entries.forEach(api => {
            if(api.Auth !== "" && api.Cors === "no"){
                apisArray.push(api)
            }
        })
        displayApis()
    })
}

function displayApis(){
    let apisList = document.querySelector("#apis")
    apisArray.forEach(api => {
        let li = document.createElement('li')
        li.innerText =`${api.API} - `
        let link = document.createElement('a')
        link.href = api.Link
        link.innerText = api.Link
        li.appendChild(link)
    
        apisList.appendChild(li)
    })

}
