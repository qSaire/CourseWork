const  UserModel = require('./models.js')

class User {
    async getAll() {
        const users = await UserModel.findAll()
        return users
    }

    async getOne(id) {
        const user = await UserModel.findByPk(id)
        if (!user) {
            throw new Error('Пользователь не найден.')
        }
        return user
    }

    async getByEmail(email) {
        const user = await UserModel.findOne({where: {email}})
        if (!user) {
            throw new Error('Пользователь не найден.')
        }
        return user
    }

    async getByNickname(nickname) {
        const user = await UserModel.findOne({where: {nickname}})
        if (!user) {
            throw new Error('Пользователь не найден.')
        }
        return user
    }

    async create(data) {
        const {email, nickname, password, role} = data
        const check = await UserModel.findOne({where: {email}})
        if (check) {
            throw new Error('Пользователь с таким email уже существует.')
        }
        check = await UserModel.findOne({where: {nickname}})
        if (check) {
            throw new Error('Этот никнейм уже занят.')
        }
        const user = await UserModel.create({email, nickname, password, role})
        return user
    }

    async update(id, data) {
        const user = await UserModel.findByPk(id)
        if (!user) {
            throw new Error('Пользователь не найден.')
        }
        const check = await UserModel.findOne({where: user.email})
        if (check) {
            throw new Error('Пользователь с таким email уже существует.')
        }
        check = await UserModel.findOne({where: user.nickname})
        if (check) {
            throw new Error('Этот никнейм уже занят.')
        }
        const {
            email = user.email,
            nickname = user.nickname,
            password = user.password,
            role = user.role
        } = data
        await user.update({email, nickname, password, role})
        return user
    }

    async delete(id) {
        const user = await UserModel.findByPk(id)
        if (!user) {
            throw new Error('Пользователь не найден.')
        }
        await user.destroy()
        return user
    }
}

module.exports = new User()