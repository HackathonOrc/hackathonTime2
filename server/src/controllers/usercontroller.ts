import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
const crypto = require('crypto');
import { transporter, mailOptions } from '../modules/mailer';
import { forgotPasswordEmail, validateEmail } from '../resources/mail/templates';

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

            transporter.sendMail(mailOptions("Validação de conta", user.email, user.validateEmailToken, user.userName, validateEmail), (error: Error) => {
                console.log({ error: error.message });
                return res.status(400).send({ error: error.message });
            });
            // return res.status(200).send({ message: "email enviado" });


            return res.status(200).send({ message: "Email de confirmação enviado" });

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
    validateUser = async (req: Request, res: Response) => {
        const { userName, token } = req.body;
        try {
            const user = await User.findOne({ userName }).select('+validateEmailToken isValidated');
            if (!user)
                return res.status(404).send({ message: 'Conta não encontrada' });

            if (user.isValidated)
                return res.status(400).send({ message: 'Email ja validado' });

            if (user.validateEmailToken !== token)
                return res.status(400).send({ message: 'Token invalido' });

            await user.update({ isValidated: true })

            return res.status(200).send({ message: "Email validado com sucesso" })


        } catch (error) {

            return res.status(400).send({ error: error.message });

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
            const user = await User.findOne({ email })
                .select('+ password isValidated');
            // console.log({ user });

            if (!user)
                return res.status(404).json({ message: "Usuario não encontrado" });

            if (!user.isValidated)
                return res.status(400).send({ message: "Email ainda não verificado" });


            if (!await bcrypt.compare(password, user.password))
                return res.status(400).json({ erro: "senha invalida" });

            // user.password = undefined;
            // user.isValidated = undefined;
            // console.log({ user });
            return res.status(200).send({
                user: await User.findOne({ email }),
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

            transporter.sendMail(mailOptions("Recuperação de senha.", user.email, token, user.userName, forgotPasswordEmail), (error: Error) => {
                console.log({ error: error.message });
                return res.status(400).send({ error: error.message });
            });
            // console.log("enviado");
            return res.status(200).send({ message: "email enviado" });


        } catch (err) {
            res.status(400).send({ error: 'Error on forgot password, try again' });
        }
    };

    resetPassword = async (req: Request, res: Response) => {
        const { userName, token, password } = req.body;

        try {
            const user = await User.findOne({ userName })
                .select('+passwordResetToken passwordResetExpires');

            if (!user)
                return res.status(404).json({ message: "Usuario não encontrado" });

            if (token !== user.passwordResetToken)
                return res.status(404).json({ message: "Token invalido" });

            const now = new Date();
            if (now > user.passwordResetExpires)
                return res.status(404).json({ message: "Token expirado" });


            user.password = password;
            // user.passwordResetToken = '';
            user.passwordResetExpires = now;
            await user.save();

            res.send();

        } catch (err) {
            res.status(400).send({ error: 'Cannot reset password' })
        }
    };

}