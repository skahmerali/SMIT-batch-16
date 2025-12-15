// const userData = (req, res) => {
//     const { fname, lname, email, pasowrd, age } = req.body;
//     if (age > 18) {
//         res.send({
//             status: 200,
//             message: "users post succcessfully",
//             data: "user is over age"
//         })
//     }
//     res.send({
//         status: 200,
//         message: "users post succcessfully",
//         data: "user is under age"
//     });
// };
const signup = (req, res) => {
    const { email, fName, lName, password } = req.body;
    let userDetails = {
        "ref": userSalaryDetails._id,
        user: "ahmer",
        _id: "sdkjbnjkbfbwfbweiufbw"
    }
    let userSalaryDetails = {
        _id: "bjhsbajhsbajhsba28128",
    }
    // const email = "ahmerali@gmail.com";
    // const name = "ahmer ali";
    // const password = "ahmerali";
    // const age = "18"; 
    // const data = [];


}

module.exports = userData;