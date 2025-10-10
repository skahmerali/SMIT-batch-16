const { userSchema, loginModal } = require("../dbSchema/schema");
const hashy = require('hashy');
const saltRounds = 10;

async function singup(req, res, next) {
    try {
        const { fName, lName, email, password } = req.body;
        const user = await userSchema.findOne({ email })

        if (user) {
            return res.send({
                status: 505,
                message: "user already exists",
            });
        }
        hashy.hash(password, function (error, hash) {
            if (error) {
                return console.log(error);
            }
            const newUser = new userSchema({ fName, lName, email, password: hash });
            newUser.save();
            res.send({
                status: 200,
                newUser,
                message: "user has been created successfully"
            });
        });
    }
    catch (err) {
        res.send({
            status: 500,
            message: "server code is failed",
            err,
        })
    }
}
async function login(req, res, next) {
    try {
        const { userEmail, password } = req.body;
        const user = await loginModal.findOne({ email: userEmail })
    
        hashy.verify(password, user.password, function (error, success) {
            if (error) {
                return console.error(err);
            }

            if (success) {
                return res.send({
                    status: 200,
                    message: "user successfully login!!!",
                })
            } else {
                console.warn("invalid password!");
            }
        });

    }
    catch (err) {
        res.send({
            message: 'user not found',
            err,
            status: 404,
        })
    }
};


