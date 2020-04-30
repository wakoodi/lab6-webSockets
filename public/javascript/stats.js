const base_url = "https://lab6-stats.herokuapp.com"
let primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})
primus.on("data", (json) => {
    console.log(json)
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
        console.log(json)
        json.data.stats.forEach(stat => {
            let country = stat.country
            let numberCases = stat.numberCases

            let divCountry = document.createElement('div')
            divCountry.className=`${country}`
            divCountry.insertAdjacentHTML('beforeend', `${country}: <span class="counter">${numberCases}</span>`)
            let overview = document.querySelector("#overview")
            overview.appendChild(divCountry)
        })
    }).catch(err => {
        console.log(err);
    })
}
window.onload = appendInfo();