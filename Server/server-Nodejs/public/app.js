

// const axios = 'axios/dist/browser/axios.cjs';
async function signup() {
    try {

        const fName = document.getElementById('fName').value;
        const lName = document.getElementById('lName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(fName, lName, email, password);
        const res = await axios.post('http://localhost:3000/api/signup', {
            fName,
            lName,
            email,
            password
        })
        console.log(res)
        // .then((res) => {

        // })
    }
    catch (err) {
        console.log(err);
    }

}
async function userDetails() {
    try {

        const res = await axios.get('http://localhost:3000/api/userDetails')
        console.log(res)
        let userData = document.getElementById("userdata")
userData.innerHTML=JSON.stringify(res.data.users)
        // .then((res) => {

        // })
    }
    catch (err) {
        console.log(err);
    }

}
userDetails();