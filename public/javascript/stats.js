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
                let country = json.data.stats.country
                let numberCases = json.data.stats.numberCases
                let p = document.createElement('p')
                let text = document.createTextNode(`${country}:${numberCases}`)
                p.appendChild(text)
                let overview = document.querySelector("#overview")
                overview.appendChild(p)
            })
        .catch(err => {
            console.log(err);
        })


}


window.onload = appendInfo();