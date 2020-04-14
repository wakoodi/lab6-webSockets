const base_url = "https://lab6-stats.herokuapp.com"


primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})

primus.on('data', (data) => {
    if(data.action === 'update'){
        append(data)
    }
})