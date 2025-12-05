

// const axios = 'axios/dist/browser/axios.cjs';
async function signup() {
    try {

        const fName = document.getElementById('fName').value;
        const lName = document.getElementById('lName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // decding token and fetching user details
        // const base64Url = token.split('.')[1];
        // const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert Base64Url to standard Base64
        // const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        // }).join(''));
        console.log(fName, lName, email, password);
        const res = await axios.post(`https://server-hosting-batch16-git-main-skahmeralis-projects.vercel.app/api/signup`, {
            headers: {
                'Authorization': `Bearer ${token}`, // For Bearer token authentication
                'Content-Type': 'application/json' // Or 'application/x-www-form-urlencoded', etc.

            }
        }, {
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
        userData.innerHTML = JSON.stringify(res.data.users)
        // .then((res) => {

        // })
    }
    catch (err) {
        console.log(err);
    }

}
userDetails();