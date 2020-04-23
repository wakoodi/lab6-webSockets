const base_url = "https://lab6-stats.herokuapp.com"


primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})

document.querySelector("#overview").addEventListener("load", function(e) {
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
            let text = document.createTextNode(`${country}:   ${numberCases}`)
            p.appendChild(text)
            let overview = document.querySelector("#overview")
            overview.appendChild(p)
        })
        })
    .catch(err => {
        console.log(err);
    })
})

document.querySelector("#submit").addEventListener("click", function (e) {
    let country = document.querySelector("#country").value
    let numberCases = document.querySelector("#number").value

    fetch(base_url + "/api/v1/stats/updatestats", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "country": country,
            "numberCases": numberCases
        })
    }).catch(err => {
        console.log(err);
    })

    primus.write({ "action": "update" })


    e.preventDefault()
})