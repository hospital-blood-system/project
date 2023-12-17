require('dotenv').config();
// authMiddleware.js

const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    // Token'ı al
    const token = req.cookies.token;
    console.log(token);
    // Token kontrolü
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token not provided' });
    }

    try {
        // Token'ı doğrula
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Kullanıcı kimliğini ayarla
        req.userId = decoded.userId;

        // Bir sonraki middleware'e geç
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = authMiddleware;
