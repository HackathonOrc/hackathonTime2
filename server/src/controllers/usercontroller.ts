import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";

import Auth from '../middlewares/auth';

import User from "../models/user";


const auth = new Auth();

export default class UserController {

    createUser = async (req: Request, res: Response) => {

        try {

            const checkEmail = await User.findOne({ email: req.body.email });
            if (checkEmail) {
                return res.status(400).send("Email ja cadastrado");
            }

            const checkUserName = await User.findOne({ userName: req.body.userName });
            if (checkUserName) {
                return res.status(400).send("Nome de usuario  ja cadastrado");
            }

            const user = await User.create(req.body);
            user.password = undefined;

            return res.status(200).send({
                user,
                token: await auth.tokenGenerator(user._id)
            });

        } catch (error) {

            console.error({ message: error });

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
    login = async (req: Request, res: Response) => {

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email }).select('+password');

            if (!user)
                return res.status(404).send({ message: "Usuario não encontrado" });

            if (!await bcrypt.compare(password, user.password))
                return res.status(400).send({ erro: "senha invalida" });

            user.password = undefined;

            return res.status(200).send({
                user,
                token: await auth.tokenGenerator(user._id)
            });

        } catch (error) {
            console.error({ error });
            res.status(500).json({ message: "Falha ao processar requisição", });
        }

    }

}