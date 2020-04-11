const Stat = require('../../../models/Stat')

const getAll = (req, res) => {
    Stat.find((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could find all statistics"
            })
        }

        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "stats": doc
                }
            })
        }
    })
}

const create = (req, res) => {
    let stat = new Stat()
    stat.country = req.body.country
    stat.numberCases = req.body.numberCases
    stat.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not save new statistics"
            })
        }
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "stats": {
                        doc
                    }
                }
            })
        }
    })
}

module.exports.getAll = getAll
module.exports.create = create