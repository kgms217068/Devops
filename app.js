require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const IMG = new Image();
IMG.src = 'make-today-tolerable.jpg';

// IMG.src 에 이미지 url을 넣으면 브라우저에서 이미지를 다운하게 되고 로드가 다되면 이벤트 발생
IMG.addEventListener('load', function() {
    console.log('높이 : ', this.naturalHeight , '너비 : ', this.naturalWidth, "이미지 : ", this.src);	
});

mongoose.connect(process.env.MONGO_URL)
 .then(() => console.log('MongoDB connected'))
 .then(err => console.error('DB error: ',err));



app.get('/', (req,res)=>res.send("안녕하세요 반갑습니다 즐거운 EC2"));
app.listen(PORT, ()=> console.log(`server on ${PORT}`));
