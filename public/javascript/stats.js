const base_url = "https://lab6-stats.herokuapp.com"

primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})

primus.on("data", (json) => {
    if (json.action === "update") {
        document.querySelector("#overview").innerHTML = ""
        appendInfo()
    }
})

function appendInfo() {
    fetch(base_url + "/api/v1/stats", {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json();
    }).then(json => {
        if(json.data.stats.country === "Belgium"){
            console.log(json.data.stats.country);
            let country = json.data.stats.country
            let numberCases = json.data.stats.numberCases
            let p = document.querySelector('#belgium')
            let text = document.createTextNode(`${country}:   ${numberCases}`)
            p.appendChild(text)
        }else if(json.data.stats.country === "Norway"){
            let country = json.data.stats.country
            let numberCases = json.data.stats.numberCases
            let p = document.querySelector('#norway')
            let text = document.createTextNode(`${country}:   ${numberCases}`)
            p.appendChild(text)
        }else if(json.data.stats.country === "Malta"){
            let country = json.data.stats.country
            let numberCases = json.data.stats.numberCases
            let p = document.querySelector('#malta')
            let text = document.createTextNode(`${country}:   ${numberCases}`)
            p.appendChild(text)
        }
            
        })
    .catch(err => {
        console.log(err);
    })
    
}


window.onload = appendInfo();