import { Request, Response } from "express";
import User from "../models/user";

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

            return res.status(200).send({ message: "Usuario cadastrado com sucesso" });

        } catch (error) {

            console.error({ message: error });

        }
    }
    getAllUsers = async (req: Request, res: Response) => {
        try {
            const allUsers = await User.find(
                {},
                "first_name narrative_status last_name email is_confirmed userName coins status isFirstTimeAppLaunching first_certificate second_certificate contribution birthday_date quiz_loading quiz_coins ignorance"
            )
            res.status(200).json(allUsers);

        } catch (error) {
            res.status(500).json({ message: "Falha ao processar requisição", });
        }

    }

}