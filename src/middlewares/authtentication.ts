import * as jwt from 'jsonwebtoken';
import { NextFunction, Response } from "express";
import { CustomRequest } from '../libs/custom-request';

export const authentication = (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const token = authorization.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET as string);
        if (!decode) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized" });
    }
}