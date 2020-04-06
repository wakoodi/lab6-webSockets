const Stat = require('../../../models/Stat.js')
const getAll = (req, res) => {
    Stat.find({"country": "Belgium"}, (err, doc) => {
        res.json({
            "status": "success",
            "data": {
                "stats" : doc
            } 
         })
    })

    
}

const create = (req, res, next) => {
    //console.log(req.body)

    let stat = new Stat()
    stat.country = req.body.country
    stat.number = req.body.number
    stat.save((err, doc)=>{
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "stats" : {
                        "country" : doc                        
                    }
                } 
            })
        }else{
            res.json({
                "status": "error",
                "message": "could not create new stats"
            })
        }
    })

    
}

module.exports.getAll = getAll
module.exports.create = create