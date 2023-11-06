const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    nickname: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    rating: {type: DataTypes.INTEGER},
    avatar: {type: DataTypes.STRING, allowNull: false},
});

const Friend = sequelize.define('friend', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
});

const FriendList = sequelize.define('friendList', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

User.hasOne(FriendList)
FriendList.belongsTo(User)

FriendList.hasMany(Friend)
Friend.belongsTo(FriendList)

module.exports = {
    User,
    Friend,
    FriendList
}