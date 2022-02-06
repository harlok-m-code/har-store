const sq_connect = require('../config/connect');
const { STRING, INTEGER } = require('sequelize');


const User = sq_connect.define("users", {
    id: { type:INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING, allowNull: false },
    email: { type: STRING, unique: true, allowNull: false },
    password: { type: STRING, allowNull: false },
    role: { type: STRING, defaultValue:"USER" }
})

const Basket = sq_connect.define('basket', {
    id: { type:INTEGER, primaryKey: true, autoIncrement: true }
})

const Device = sq_connect.define("device", {
    id: { type:INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING, allowNull: false },
    price: { type: INTEGER },
    img: { type: STRING, allowNull: false }
})

const Type = sq_connect.define("type", {
    id: { type:INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING, allowNull: false },
})

const BasketDevice = sq_connect.define("basket_device",{
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Type.hasMany(Device)
Device.belongsTo(Type)


module.exports = {
    User,
    Device,
    Basket,
    Type
}