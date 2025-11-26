let experiences = {
    "applotech": {
        "2017": "",
        "2018": "",
    }
}

let skills = ["html", "css"];

// for file uploading
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configure Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Handle file upload POST request
app.post('/upload', upload.single('myFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

const fs = require('fs');
const axios = require('axios'); // Install axios: npm install axios
const FormData = require('form-data'); // Install form-data: npm install form-data

async function uploadFileProgrammatically() {
    const filePath = '/path/to/your/file.txt'; // Replace with your file path
    const form = new FormData();
    form.append('myFile', fs.createReadStream(filePath)); // 'myFile' matches the Multer field name

    try {
        const response = await axios.post('http://localhost:3000/upload', form, {
            headers: {
                ...form.getHeaders()
            }
        });
        console.log('Upload successful:', response.data);
    } catch (error) {
        console.error('Upload failed:', error.message);
    }
}

uploadFileProgrammatically();