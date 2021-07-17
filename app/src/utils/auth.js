import * as jwt from 'jsonwebtoken';
import * as authConfig from '../config/authConfig.json';


export default async function isTokenValid(token) {
    try {

        await jwt.verify(token, authConfig.secret);

        return true;

    } catch (error) {

        return false;
    }
}