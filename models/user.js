const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'silahkann isi nama'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'silahkan isi email yang valid']
    }
})

module.exports = mongoose.model('user', UserSchema)