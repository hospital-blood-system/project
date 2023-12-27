const crypto = require('crypto');

let generateSalt = () => {
    const rounds = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
    const salt = crypto.randomBytes(Math.ceil(rounds / 2)).toString('hex').slice(0, rounds);
    return salt;
};

let hasher = (password, salt) => {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let value = hash.digest('hex');
    return {
        salt: salt,
        hashedpassword: value
    };
};

let hash = (password) => {
    if (password == null) {
        throw new Error('Must Provide Password');
    }
    if (typeof password !== 'string') {
        throw new Error('password must be a string');
    }
    const salt = generateSalt();
    return hasher(password, salt);
};

let compare = (password, hash) => {
    if (password == null && hash == null) {
        throw new Error('password and hash is required to compare');
    }
    if (typeof password !== 'string' && typeof hash !== 'object') {
        throw new Error('password must be a String and hash must be an Object');
    }
    let passwordData = hasher(password, hash.salt);
    
    if (passwordData.hashedpassword === hash.hashedpassword) {
        return true;
    }
    return false
};

module.exports={
    hash,
    compare,
}