const e = require('express');
const db = require('_helpers/db');
const audit = db.Audit;
const User = db.User;

module.exports = {
    getAll,
    create,
};


async function getAll({ username }) {
    const user = await User.findOne({ username });
    if (user && user.role.toUpperCase() === 'AUDITOR') {
        return await audit.find().select('-hash');
    } else {
        return
    }
}

async function create(auditParam) {
    // validate
    if (await audit.findOne({ ipAddress: auditParam.ipAddress, timestamp: auditParam.timestamp })) {
        throw 'audit is already added';
    }

    const audit = new audit(auditParam);

    // save audit
    await audit.save();
}