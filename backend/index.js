const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const sendMail = require("./sendMail");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors())
app.use(express.json());

// Configure Multer for file uploads
const storage = multer.diskStorage({
    // destination: (req, file, cb) => {
    //     const username = req.params.username;
    //     const userFolderPath = path.join(__dirname, "./uploads", username);
    //     cb(null, userFolderPath);
    // },
    // filename: (req, file, cb) => {
    //     cb(null, file.originalname);
    // }
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

app.post("/application", upload.single('file'), async(req, res) => {
    const {name, job, gender, address, country, city, qualification, birthday} = req.body;

    try{

        // Read uploaded PDF file
        const filePath = path.join(__dirname, 'uploads', req.file.filename);
        const fileContent = fs.readFileSync(filePath);

        sendMail({ job, name,gender,address,country,city,qualification,birthday, CV: fileContent });
        res.status(200).json('PDF uploaded successfully')
    }catch(err) {
        res.status(500).json(err);
        console.log(err)
    }
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
