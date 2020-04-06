const express = require('express')
const router = express.Router()

/* /api/v1/stats*/
router.get('/', (req, res) => {
    res.json({
       "status": "success",
       "data": {
           "stats" : []
       } 
    })
})


router.post("/", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "stats" : {
                "country" : "Belgium",
                "new cases" : 200
            }
        } 
    })
})


module.exports = router