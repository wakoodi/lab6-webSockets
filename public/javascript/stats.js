const base_url = "https://lab6-stats.herokuapp.com"
let primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})
primus.on("data", (json) => {
        document.querySelector("#overview").innerHTML = ""
        appendInfo()
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

            let pCountry = document.createElement('p')
            pCountry.innerHTML(`${country}:`)
            let pNumberCases = document.createElement('p')
            pNumberCases.innerHTML(`${numberCases}:`)
            let overview = document.querySelector("#overview")
            overview.appendChild(pCountry).appendChild(pNumberCases)
        })
    }).catch(err => {
        console.log(err);
    })
}
window.onload = appendInfo();