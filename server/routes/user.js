const { Router } = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');

const router = Router();

router.post('/registration',
[
    check("email", "Содержит не допустимые символы!").isEmail(),
    check("password","Пароль должен содержать от 5 до 12 символов!").isLength({min:5, max:12}),
    check("email","Не должно быть пустым!").notEmpty()
],
userController.registration)
router.post('/login', userController.login)

module.exports = router;