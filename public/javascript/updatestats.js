const base_url = "https://lab6-stats.herokuapp.com"


let primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})

document.querySelector("#submit").addEventListener("click", function (e) {
    let country = document.querySelector("#country").value
    let numberCases = document.querySelector("#number").value

    fetch(base_url + "/api/v1/stats/"+ country, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "numberCases": numberCases
        })
    }).then((e)=>{
        if(e.status === 200){
            primus.write({ country: country, numberCases: numberCases })
        }
    }).catch(err => {
        console.log(err);
    })

    //primus.write({ "action": "update" })

    e.preventDefault()
})