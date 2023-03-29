const Email = require('../../models/email')

module.exports = {
    create
}

async function create(req, res) {
    try {
        const email = await Email.create(req.body);
        const allEmail = await Email.find({})
        res.json(allEmail);
    } catch (err) {
        res.status(400).json(err);
    }
}
