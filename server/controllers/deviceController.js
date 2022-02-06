const { Device } = require('../model/model');
const uuid = require('uuid');
const path = require('path');

class deviceController {
    
    async createDevice (req, res, next){
        try {
            const { name, price, typeId } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + "jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({
                name,
                price,
                img: fileName,
                typeId
            })

            res.json(device);
        } catch (error) {
            console.log(error)
        }
    }

    async getDevices (req, res){
        try {
            const devices = await Device.findAll();

            res.json(devices)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteDevice (req, res) {
        try {
            const { id } = req.params;
            const device = await Device.destroy({where: {id:id}})
        } catch (error) {
            console.log(error)
        }
    }
}



module.exports = new deviceController();