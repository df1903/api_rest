/** package */
var CryptoJS = require("crypto-js");
const config = require("config");
const jwt = require("jsonwebtoken");

/** Encrypt password */
exports.EncryptPassword = (password) =>{
    let secretKey = config.get("secretKeys").cryptojs;
    let encryptPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptPassword;
};

exports.DescryptPassword= (cryptedPassword) => {
    let secretKey = config.get("secretKeys").cryptojs;
    let bytes  = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass;
}

exports.GenerateToken = (user) => {
    let secretKey = config.get("secretKeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            username: user.username,
            id: user._id,
            role: user.role
        }
    }, secretKey);
    return token;
}