const base_url = "https://lab6-stats.herokuapp.com"

primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})

primus.on("data", (json) => {
    if(json.action === "update"){
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
        json.data.stats.forEach(stat => {
            let country = stat.country
            let numberCases = stat.numberCases
            let p = document.createElement('p')
            p.innerHTML = `${country} --> ${numberCases}`
            document.querySelector("#overview").innerHTML = p 
        })
    }).catch(err => {
        console.log(err);
    })
}

window.onload = appendInfo();