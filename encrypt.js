const { encrypt } = require("./script");

const payload = {userId: 800, role: "Admin"};
const encryptedToken = encrypt(payload);
console.log('successful', encryptedToken)