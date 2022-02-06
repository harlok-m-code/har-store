const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.KEY,
        {expiresIn:"12h"}
    )
}

const { User, Basket } = require('../model/model');
const ApiError = require('../error/ApiError');

class userController {
    async registration (req, res, next) {
        try {
            const { name, email, password, role }  = req.body;
            const candidate = await User.findOne({where: {email}});
            const errors = validationResult(req);
            if(candidate){
                return next(ApiError.badRequest(`Пользователь с таким ${email} уже существует!`))
            }
            if(!errors.isEmpty()){
                return res.status(401).json({message: "Error", errors})
            }
            const hashPassword = await bcrypt.hash(password,6);
            const user = await User.create({email, password:hashPassword, name, role});
            const basket = await Basket.create({userId: user.id});
            const token = generateJwt(user.id, user.email, user.role)

            res.json({token})
        } catch (error) {
            console.log(error)
        }
    }

    async login (req, res, next){
        const { email, password }  = req.body;
        const user = await User.findOne({where: {email}});
        const id = user.id
        if(!user){
            return next(ApiError.internal('Данный email не заригестрирован!'))
        }
        const comparePassword = bcrypt.compare(password, user.password);
        if(!comparePassword){
            return next(ApiError.internal("Не правильный пароль!"))
        }
        const token = generateJwt(user.id, user.email, user.role);

        res.json({token, id})
    }
    
    async getUsers (req, res){
        const users = await User.findAll();
        
        res.json(users);
    }

}

module.exports = new userController();