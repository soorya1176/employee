const express = require('express');
const router = express.Router();
const {Insert,View,Delete, Update, Register} = require('../controller/student');

router.post('/insert',Insert)
router.post('/register',Register)
router.get('/view/:id',View)
router.delete('/delete/:id',Delete)
router.put('/update/:id',Update)
module.exports=router;