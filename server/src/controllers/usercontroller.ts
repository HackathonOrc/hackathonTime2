import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
const crypto = require('crypto');
import { transporter, mailOptions } from '../modules/mailer';
import { forgotPasswordEmail } from '../resources/mail/templates';

import Auth from '../middlewares/auth';

import User from "../models/user";

const auth = new Auth();

export default class UserController {

    createUser = async (req: Request, res: Response) => {

        try {

            const checkEmail = await User.findOne({ email: req.body.email });
            if (checkEmail) {
                return res.status(400).json({ message: "Email ja cadastrado" });
            }

            const checkUserName = await User.findOne({ userName: req.body.userName });
            if (checkUserName) {
                return res.status(400).json({ message: "Nome de usuario  ja cadastrado" });
            }

            const user = await User.create(req.body);
            user.password = undefined;

            return res.status(200).send({
                user,
                token: await auth.tokenGenerator(user._id)
            });

        } catch (error) {
            console.log({ error });
            res
                .status(400)
                .json({
                    message:
                        "Falha ao criar usuário, talvez você tenha colocado um e-mail já em uso!",
                });

        }
    }

    getAllUsers = async (req: Request, res: Response) => {

        try {

            const allUsers = await User.find({});
            res.status(200).json(allUsers);

        } catch (error) {
            res.status(500).json({ message: "Falha ao processar requisição", });
        }
    }

    getOneUser = async (req: Request, res: Response) => {

        try {
            const data = await User.findById(
                req.params.id,
            );
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({
                message: "Falha ao pegar usuário",
            });
        }
    };

    login = async (req: Request, res: Response) => {

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email }).select('+password');

            if (!user)
                return res.status(404).json({ message: "Usuario não encontrado" });

            if (!await bcrypt.compare(password, user.password))
                return res.status(400).json({ erro: "senha invalida" });

            user.password = undefined;

            return res.status(200).send({
                user,
                token: await auth.tokenGenerator(user._id)
            });

        } catch (error) {
            return res.status(400).json({ error: "Login falhou" });
        }

    }


    forgotPassword = async (req: Request, res: Response) => {
        const { email } = req.body;

        try {
            const user = await User.findOne({ email });

            if (!user)
                return res.status(404).json({ message: "Usuario não encontrado" });

            const token = crypto.randomBytes(20).toString('hex');

            const now = new Date();
            now.setHours(now.getHours() + 1);

            await User.findByIdAndUpdate(user.id, {
                '$set': {
                    passwordResetToken: token,
                    passwordResetExpires: now
                }
            });

            try {
                transporter.sendMail(mailOptions(user.email, token, forgotPasswordEmail), (error: Error) => {
                    console.log({ error: error.message });
                    return res.status(400).send({ error: error.message });
                });
                console.log("enviado");
                return res.status(200).send({ message: "email enviado" });
            } catch (error) {
                return res.status(400).send({ error: error.message });

            }

        } catch (err) {
            res.status(400).send({ error: 'Error on forgot password, try again' });
        }
    };

    resetPassword = async (req: Request, res: Response) => {
        const { email, token, password } = req.body;

        try {
            const user = await User.findOne({ email })
                .select('+passwordResetToken passwordResetExpires');

            if (!user)
                return res.status(404).json({ message: "Usuario não encontrado" });

            if (token !== user.passwordResetToken)
                return res.status(404).json({ message: "Token invalido" });

            const now = new Date();
            if (now > user.passwordResetExpires)
                return res.status(404).json({ message: "Token expirado" });


            user.password = password;
            await user.save();

            res.send();

        } catch (err) {
            res.status(400).send({ error: 'Cannot reset password' })
        }
    };

}