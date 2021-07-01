import * as jwt from 'jsonwebtoken';
import * as authConfig from '../config/authConfig.json';

export default class Auth {
    tokenGenerate = async (_id: string) => {

        const token = jwt.sign({ id: _id }, authConfig.secret, { expiresIn: 86400 });
        return token;
    }

}