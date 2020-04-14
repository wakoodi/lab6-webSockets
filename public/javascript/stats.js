const base_url = "https://lab6-stats.herokuapp.com"
let overview = document.querySelector("#overview");

primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})

primus.on("data", (json) => {
    if(json.action === "addStats"){
        overview.innerHTML = ""
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
            let div = document.createElement('div').setAttribute("class", "statistic")
            let country = document.createElement('h2').innerHTML = stat.country
            let numberCases = document.createElement('p').innerHTML = stat.numberCases
            div.append(country).append(numberCases)
            overview.append(div);
        })
    })
}

window.onload = appendInfo();