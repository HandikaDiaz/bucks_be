import { Response } from "express";
import { CustomRequest } from "../libs/custom-request";
import * as authService from "../services/auth-service"

export async function Register(req: CustomRequest, res: Response) {
    try {
        const body = req.body
        const user = await authService.register(body)
        res.json(user)
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

export async function Login(req: CustomRequest, res: Response) {
    try {
        const body = req.body
        const user = await authService.login(body)
        res.json(user)
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

export async function Logout(req: CustomRequest, res: Response) {
    try {
        res.clearCookie('token')
        res.json({ message: "Logout successful" })
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}