require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGO_URL)
 .then(() => console.log('MongoDB connected'))
 .then(err => console.error('DB error: ',err));

app.get('/', (req,res)=>res.send("hello hell!"));
app.listen(PORT, ()=> console.log(`server on ${PORT}`));
