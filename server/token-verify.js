const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjM2OTAwNTYzfQ.ZSM3nh-kddQpwJNLxl0Q6Rfz4QRII-jdFqiK3pUJ_YM'

function verifyToken(token, secret){
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload)