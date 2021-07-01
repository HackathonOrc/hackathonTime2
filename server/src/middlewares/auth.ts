import { Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';
import * as authConfig from '../config/authConfig.json';
export default class Auth {
    tokenDecoder = async (token: string) => {
        try {
            const data = await jwt.verify(token, authConfig.secret);
            return data;
        } catch (error) {
            return undefined;
        }
    }
    tokenGenerator = async (_id: string) => {

        const token = jwt.sign({ id: _id }, authConfig.secret, { expiresIn: 86400 });
        return token;
    }

}