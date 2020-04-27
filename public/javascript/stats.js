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
            let overview = document.querySelector("#overview") // parent

            

            let country = stat.country
            let numberCases = stat.numberCases
           let countryP = document.createElement('p').innerHTML(`${country}:`)
           let numberCasesP = document.createElement('p').innerHTML(`${numberCases}:`)
            
           overview.innerHTML = countryP + numberCasesP
           
            
        })
    }).catch(err => {
        console.log(err);
    })
}
window.onload = appendInfo();