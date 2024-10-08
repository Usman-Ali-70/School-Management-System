const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
const path = require('path');
const PORT = process.env.PORT || 3000

require('dotenv').config(); 
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
//   });
app.use(cors({
    origin: 'https://school-management-system-six-delta.vercel.app', // Replace with your React frontend URL
  }));
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))
    // console.log('MongoDB URL:',process.env.MONGO_URL);

app.use('/', Routes);
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
