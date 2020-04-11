const mongoose = require('mongoose')
const Schema = mongoose.Schema
const statSchema = new Schema({ 
   country: String,
   numberCases: Number 
})
const Stat = mongoose.model('Stat', statSchema)

const getAll = (req, res) => {
    Stat.find((err, doc) =>{
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "stats" : doc
                }
            })
        }
    })

    
}

const create = (req, res) => {
    let stat = new Stat()
    stat.country = "belgium"
    stat.numberCases = 200
    stat.save((err, doc)=>{
        if (!err) {
            res.json({
                "status" : "success",
                "data" : {
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