const {model, Schema} = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
    email: String,
    password: String,
    campus: {
        type: String,
        eunm: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon']
    },
    course: {
        type: String,
        enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
    image: {
        type: String,
        default: ''
    }
})

userSchema.plugin(PLM, {usernameField: "email"})

module.exports = model('User', userSchema)