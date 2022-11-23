const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const protect = async(req,res,next)=>{
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1]

            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get User from token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401).send({message: 'Not Authorized'})
        }
    }else{
        res.status(401).send({message: 'Not Authorized, No Token'})
    }
}

module.exports = {protect}