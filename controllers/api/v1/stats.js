const mongoose = require('mongoose')
const Schema = mongoose.Schema
const statSchema = new Schema({ 
    country : String,
    number : Number
})
const Stat = mongoose.model('Stat', statSchema)
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

const create = (req, res) => {
    let stat = new Stat()
    stat.country = "Belgium"
    stat.number = 200
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
        }
    })

    
}

module.exports.getAll = getAll
module.exports.create = create