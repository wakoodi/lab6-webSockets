const getAll = (req, res) => {
    res.json({
       "status": "success",
       "data": {
           "stats" : []
       } 
    })
}

const create = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "stats" : {
                "country" : "Belgium",
                "new cases" : 200
            }
        } 
    })
}

module.exports.getAll = getAll
module.exports.create = create