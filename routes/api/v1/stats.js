const express = require('express')
const router = express.Router()
const statsController = require('../../../controllers/api/v1/stats')

/* /api/v1/stats */
router.get('/', statsController.getAll)

router.post('/createstat', statsController.create)

router.put('/updatestats', statsController.updateOne)

module.exports = router