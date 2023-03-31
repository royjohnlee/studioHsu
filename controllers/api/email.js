const Email = require('../../models/email')

module.exports = {
    create,
    update
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

async function update(req, res) {
    try {
        console.log(req.body)
        const updateEmail = await Email.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        console.log("controller email: ", updateEmail)
        res.status(200).json(updateEmail);
    } catch (err) {
        res.status(400).json(err);
    }
}
