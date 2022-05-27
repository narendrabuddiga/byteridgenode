const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    type: { type: String, unique: true, required: true },
    ipAddress: { type: String, unique: true, required: true },
    timestamp: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('audit', schema);