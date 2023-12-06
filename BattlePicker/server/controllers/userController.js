const ApiError = require('../error/ApiError.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User.js')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, nickname, password, role} = req.body
        try {
            if (!email || !password || !nickname) {
                throw new Error('Пустой email, пароль или никнейм!')
            }
            const hash = await bcrypt.hash(password, 5)
            const user = await User.create({email, nickname, password: hash, role})
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const user = await User.getByEmail(email)
            let compare = bcrypt.compareSync(password, user.password)
            if (!compare) {
                throw new Error('Указан неверный пароль')
            }
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async addFriend(req, res, next)
    {
        const nickname = req.body
        const friend = await User.getByNickname(nickname)

    }

    async check(req, res, next) {
        const token = generateJwt(req.auth.id, req.auth.email, req.auth.role)
        return res.json({token})
    }

    async getAll(req, res, next) {
        try {
            const users = await User.getAll()
            res.json(users)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id пользователя')
            }
            const user = await User.getOne(req.params.id)
            res.json(user)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        const {email, password, role = 'USER'} = req.body
        try {
            if (!email || !password) {
                throw new Error('Пустой email или пароль')
            }
            if ( ! ['USER', 'ADMIN'].includes(role)) {
                throw new Error('Недопустимое значение роли')
            }
            const hash = await bcrypt.hash(password, 5)
            const user = await User.create({email, password: hash, role})
            return res.json(user)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id пользователя')
            }
            if (Object.keys(req.body).length === 0) {
                throw new Error('Нет данных для обновления')
            }
            let {email, password, role} = req.body
            if (password) {
                password = await bcrypt.hash(password, 5)
            }
            const user = await User.update(req.params.id, {email, nickname, password, role})
            res.json(user)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id пользователя')
            }
            const user = await User.delete(req.params.id)
            res.json(user)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController()