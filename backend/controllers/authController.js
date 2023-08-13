import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const register = async(req,res)=>{
    try {
        const salt = bcrypt.genSaltSycn(10);
        const hash = bcrypt.hashSync(req.body.password,salt);

        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hash,
            photo : req.body.photo,

        })

        await newUser.save();

        res.status(200).json({
            success : true,
            message : "User created" 
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Failed to create a user. Try again" 
        })
    }
}

export const login = async(req,res)=>{
    const email = req.body.email;

    try {
        const user = User.findOne({email});
        if(!user){
            return  res.status(403).json({
                success : false,
                message : "User not found"
            });
        };
        let isMatch = await bcrypt.compare(req.body.password ,user.password );

        if(!isMatch){
            res.status(401).json({
                success:false,
                message : "Invalid credentials"
            })
        }

        const {password , role , ...rest} = user._doc

        const token = jwt.sign({id : user._id, role : user.role},process.env.JWT_SECRET,{expiresIn : "15d"});

        res.cookie('accessToken',token,{
            httpOnly : true,
            expires : token.expiresIn
        }).status(200).json({
            token,
            data:{...rest},
            role,
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message : "Failed to login. Try again"
        })
    }
}