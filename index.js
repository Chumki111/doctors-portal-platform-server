require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/',(req,res) =>{
    console.log('hello doctors_portal');
})
app.listen(port,()=>{
    console.log(`doctor_portal is running on port ${port}`);
})