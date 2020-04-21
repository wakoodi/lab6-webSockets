const base_url = "https://lab6-stats.herokuapp.com"


primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
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


    if (country === "Belgium") {
        primus.write({ "action": "updateB" })
    }
    if (country === "Norway") {
        primus.write({ "action": "updateN" })
    }
    if (country === "Malta") {
        primus.write({ "action": "updateM" })
    }


    e.preventDefault()
})