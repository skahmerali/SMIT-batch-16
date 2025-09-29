const ageChecker = (req, res, next) => {
    const { userAge } = req.body;
    if (userAge >= 18) {
        // res.send('user is valid')
        next();
    } else {
        return res.send({
            status: 505,
            message: 'user is not valid'
        })
    }
}

module.exports = { ageChecker }