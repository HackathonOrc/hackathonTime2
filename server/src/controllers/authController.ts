const express = require('express');
import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

import Auth from '../middlewares/auth';

import User from "../models/user";


const auth = new Auth();

const router = express.Router();

router.post('./forgot_password', async (req: Request, res: Response)=>{
    const {email} = req.body;

    try{
        const user = await User.findOne({email});

        if(!user)
            return res.status(404).json({ message: "Usuario não encontrado" });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set':{
                passwordResetToken: token,
                passwordResetExpires: now
            }
        });

        console.log({token, now})

    }catch(err){
        res.status(400).send({error: 'Error on forgot password, try again'});
    }
});

