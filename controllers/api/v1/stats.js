const Stat = require('../../../models/Stat.js')

const getAll = (req, res) => {
    Stat.find({}, (err, doc) => {

        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "stats" : doc
                } 
             })
        }
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

const update = (req, res) => {
    let country = req.body.country;
    let number = req.body.number;
    res.json({
        "status": "success",
        "country": country,
        "number": number
        
    });
    Stat.findOneAndUpdate({"country": country}, {"number": number})
        .then(doc => {
            res.json(doc);
        }).catch(err => {
            res.json(err);
        })
            
}

module.exports.getAll = getAll
module.exports.create = create
module.exports.update = update