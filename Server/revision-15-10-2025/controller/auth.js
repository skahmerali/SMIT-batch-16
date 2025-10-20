const jwt = require('jsonwebtoken');

async function userAuth(req, res) {
    // destructure
    try {
        const { email, name } = req.body;
        // const email = "ahmer";
        // let fname = true;
        // console.log(email);
        // console.log(name);
        // if (email) {
        //     console.log('here is an email', email);
        // }
        // if (fname) {
        //     console.log('here is an name', fname);
        // }
        if (email && name) {
            return res.send({
                status: 200,
                message: "user created successfully",
            })
        }
        else {
            res.send({
                status: 201,
                message: "value is missing"
            })
        }
    } catch (err) {
        res.send({
            err,
            status: 500,
            message: "sorry! server is not responding"
        })
    }
};
async function login(req, res) {
    // destructure
    try {
        const { email, password } = req.body;
        // const email = "ahmer";
        // let fname = true;
        // console.log(email);
        // console.log(name);
        // if (email) {
        //     console.log('here is an email', email);
        // }
        // if (fname) {
        //     console.log('here is an name', fname);
        // }
        if (email && password) {
            const token = jwt.sign({ email, id: '12345', name: "ahmer" })
            console.log(token);
            return res.send({
                status: 200,
                message: "user created successfully",
            })
        }
        else {
            res.send({
                status: 201,
                message: "value is missing"
            })
        }
    } catch (err) {
        res.send({
            err,
            status: 500,
            message: "sorry! server is not responding"
        })
    }
};

module.exports = { userAuth, login }