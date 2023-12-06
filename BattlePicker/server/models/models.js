const sequelize = require('../db.js')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    nickname: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    rating: {type: DataTypes.INTEGER, defaultValue: 1500},
    avatar: {type: DataTypes.STRING, allowNull: false, defaultValue: "149071.png"},
    friendList: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
})

module.exports = {
    User
}