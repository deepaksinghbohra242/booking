require('dotenv').config();
const jwt = require('jsonwebtoken');

const fetchUser = async (req, res, next) => {
    const {token} = req.cookies;
    if (!token) {  
        return res.status(401).json({ message: 'Unauthorized : Missing token' });
    }
    try {
        jwt.verify(token, process.env.JWT_KEY , async(err , userData)=>{
            if(err){
                console.log(err);
                return res.status(403).json(err);
            }
            
            req.userId = userData?.id;
            next();
        });
    }

    catch (error) {
        res.status(401).send({ message: "Please authenticate using a valid token" })
    }
    
}

module.exports = fetchUser;