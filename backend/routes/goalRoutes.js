const express = require('express')
const router = express.Router()
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalController')

router.route('/goals').get(getGoals).post(setGoals)
router.route('/goals/:id').put(updateGoals).delete(deleteGoals)

module.exports = router