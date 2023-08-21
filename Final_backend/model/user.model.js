const User = require('../database/users.schema')
const baseModel = require('./base.model');
const moment = require('moment');
const handlerPassword = require('../helpers/handle_password');

class UserModel extends baseModel {
    async login({ email, password }) {
        const user = await User.findOne({ email })
        if (!user) throw new Error('User not found');
        const isPasswordMatch = await handlePassword.comparePassword(password, user.password)
        if (isPasswordMatch) {
            return user;
        } else {
            throw new Error('Invalid password');
        }
    }

    async query(query = {}, sort) {
        try {
            const { limit, skip } = query;
            console.log('limit, skip', limit, skip);
            const rex = new RegExp(query.email, 'i');
            const queryObject = {
                email: rex,
            }
            if (query.afterDay) {
                queryObject.birthday['$gte'] = moment(query.afterDay, 'DD-MM-YYYY');
            }
            if (query.beforeDay) {
                queryObject.birthday['$lte'] = moment(query.beforeDay, 'DD-MM-YYYY');
            }

            const data = await User.find(queryObject).skip(+skip).limit(+limit).sort({
                email: 1
            });
            return data;
        } catch (error) {
            console.log('ddddd');
        }
    }
}