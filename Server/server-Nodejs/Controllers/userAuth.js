function auth(req, res, next) {
    // console.log(req.ahmer);
    res.send('hello world!!!');
}
function login(req, res, next) {
    const { userEmail, passowrd } = req.body;
    let isFound = false;
    console.log(userEmail);
    console.log(passowrd);
    if (passowrd.length < 5) {
        return res.send("password length must be at least 5")
    }
    for (var i = 0; i < userData.length; i++) {
        if (userEmail === userData[i].email
            &&
            passowrd === userData[i].pass) {
            isFound = true;
            return res.send({
                status: 200,
                message: 'login successfully'
            })
        }
    }

    if (isFound === false) {
        res.send({
            status: 404,
            message: 'User Not found'
        })
    }

};

module.exports = { auth, login };