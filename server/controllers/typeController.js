const { Type }  = require('../model/model');
const ApiError = require('../error/ApiError')


class typeController {
    async createTypes (req, res, next){
        const { name } = req.body;
        const type = await Type.findOne({where:{name}});
        if(type){
            return next(ApiError.internal("Данный тип техники уже сушествует!"))
        }
        const types = await Type.create({name});

        res.json(types);
    }

    async getTypes(req, res){
        const types = await Type.findAll();
        
        res.json(types);
    }

    async deleteTypes (req, res){
        const { id } = req.params;
        const type = Type.destroy({where:{id: id}})

        res.json(type)
    }
}

module.exports = new typeController();