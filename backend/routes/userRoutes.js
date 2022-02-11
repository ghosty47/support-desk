const express = require('express')
const router = express.Router()
const { registerUser, loginUser, verifyUser } = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/verify',protect, verifyUser)

module.exports = router