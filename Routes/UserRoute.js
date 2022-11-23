const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../Models/User')
const { protect } = require('../Middleware/AuthMiddleware')

const router = express.Router()

router.post('/register', async(req,res)=>{
    const {username, password, department} = req.body

    if (!username || !password || !department) {
        res.json({message: "Please Fil all the fields"})
    }else{
        // Check if user exists
        const  userExists  = await User.findOne({username})
        if (userExists) {
            res.send({message: "User Already Exists"})
        }else{
            // Hash password
            const salt = await bcrypt.genSalt(10)
            const hasedPassword = await bcrypt.hash(password,salt)

            // Create User
            const user = await User.create({
                username,
                department,
                password: hasedPassword
            })

            if (user) {
                res.json({message: "User Saved Successfully", data:user})
            }else{
                res.json({message: "User Did Not Save"})
            }
        }
    }
})

router.post('/login', async(req,res)=>{
    const {username, password, department} = req.body

    const user = await User.findOne({username})
    if(!user){
        res.json({message: 'User Log in Failed'})
    }else{
        if (user && department === user.department && (await bcrypt.compare(password, user.password))) {
            res.send({message: 'User Logged in Successfully', data: user, token:generateToken(user._id)})
        }else{
            res.json({message: 'User Log in Failed'})
        }
    }
})

router.get('/get-user', protect, async(req,res)=>{
    const{_id, username} = await User.findById(req.user.id)
    res.status(200).json({message: 'USer data display', username, id:_id})
})

// Generate JWT Token
const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:'1d'})
}

module.exports = router