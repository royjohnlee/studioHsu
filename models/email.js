const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({
    name: { type: String },
    email: { type: String },
    textBox: { type: String, required: true },
    isRead: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});


module.exports = mongoose.model('Email', emailSchema);
