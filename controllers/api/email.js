const Email = require('../../models/email')

module.exports = {
    create,
    update,
    delete: deleteEmail
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
        const updateEmail = await Email.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

        res.status(200).json(updateEmail);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteEmail(req, res) {
    try {

        console.log(req.params.id)
        const deletedEmail = await Email.findByIdAndDelete(req.params.id)

        res.status(200).json(deletedEmail)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}
