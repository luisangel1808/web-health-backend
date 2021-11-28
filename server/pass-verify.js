const bcrypt = require('bcrypt');

async function verifyPassword(){
    const myPassword = 'admin 123 .202';
    const hash = '$2b$10$AG8gTOiM9YjAKrQ.yYdTAuWLG3PNx8KP2jfp0eQ7TO1JR2rvG6E3S';
    const isMatch = await bcrypt.compare(myPassword, hash)
    //console.log(isMatch)
}

verifyPassword();