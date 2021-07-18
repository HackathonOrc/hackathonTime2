import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as authConfig from "../config/authConfig.json";

interface Idata {
  id: string;
  iat: number;
  exp: number;
}
export default class Auth {
  tokenGenerator = async (_id: string) => {
    const token = jwt.sign({ id: _id }, authConfig.secret, {
      expiresIn: 86400,
    });
    return token;
  };

  tokenDecoder = async (token: string) => {
    try {
      const data = await jwt.verify(token, authConfig.secret);
      return data;
    } catch (error) {
      return undefined;
    }
  };

  autenticate = async (req: Request, res: Response, next: () => void) => {
    try {
      var token = req.body.token;
      if (!token) token = req.params.token;
      if (!token) token = req.query.token;

      if (!token) res.status(401).send({ message: "Token não informado" });

      const data = await jwt.verify(token, authConfig.secret);

      req.userId = (<Idata>data).id;

      next();
    } catch (error) {
      if (error.message === "invalid signature")
        res.status(401).send({ message: "Token invalido" });
      else {
        res.status(401).send({ error: error.message });
      }
    }
  };
}
