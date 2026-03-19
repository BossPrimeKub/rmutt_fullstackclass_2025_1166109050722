const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// ตัวอย่าง route สำหรับ authen
router.post('/login', accountController.login);
router.post('/register', accountController.register);

module.exports = router;