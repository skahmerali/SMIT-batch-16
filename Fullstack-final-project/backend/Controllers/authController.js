const User = require("../model/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

// 11-02-2026
// singup a user with single role as a user
const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.send({ message: "please fill all the fields" })
        }
        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.send({ message: "user already exist" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        const user = await User.create({
            name,
            email,
            password: hashed
        })
        res.status(201).send({
            message: "user ceated successfully",
            user: {
                // id: user._id,
                name: user.name,
                email: user.email,
                password: user.password
            }
        })


    } catch (err) {
        return res.status(500).send({
            message: "signup failed internal err",
            err: err.message
        })
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send({ message: "please fill all the fields" })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.send({ message: "user not found" })
        }
        const matchPass = await bcrypt.compare(password, user.password)
        if (!matchPass) {
            return res.send({ message: "invalid credentials" })
        }
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie("token", token, {
            httpOnly: true,
            samsite: "lax",
            maxAge: 1 * 60 * 60 * 1000,
            secure: false
        })
        res.status(200).send({
            message: "login successfully",
            user: {
                token
            }
        })

    } catch (Err) {
        return res.status(500).send({
            message: "login failed",
            err: Err.message
        })
    }
};

const Logout = async (req, res) => {
    res.cookie("token", "")
    res.send({ message: "logout successfully" })
}

// 13-02-2026
// create a function where frontend can invite another user to join the platform with a specific role and send an email to the invited user with a link to signup with that role. The link should contain a token that can be used to verify the invitation and assign the correct role to the new user upon signup.

module.exports = { Signup, Login, Logout }