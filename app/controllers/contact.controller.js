exports.create = (req, res) => {
    res.send({ message: 'Create contact' });
}

exports.findAll = (req, res) => {
    res.send({ message: 'Find all contacts' });
}

exports.findOne = (req, res) => {
    res.send({ message: `FindOne contact` });
}

exports.update = (req, res) => {
    res.send({ message: `Update contact` });
}

exports.delete = (req, res) => {
    res.send({ message: `Delete contact` });
}

exports.deleteAll = (req, res) => {
    res.send({ message: `Delete all contacts` });
}

exports.findAllFavorite = (req, res) => {
    res.send({ message: `Find all favorite contacts` });
}
