import { LoginDto } from "../dto/login-dto";
import { RegisterDto } from "../dto/register-dto";
import * as authRepo from "../repositories/auth-repo";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export async function register(data: RegisterDto) {
    const existUser = await authRepo.findUserByEmailOrUsername(data.email)
    if (existUser) {
        throw new Error("User already exist")
    }

    const salt = 10
    const hashedPassword = await bcrypt.hash(data.password, salt)
    const username = data.email.split('@')[0];
    const createUser = await authRepo.createUser({
        ...data,
        password: hashedPassword,
        username
    })
    const { password, ...result } = createUser
    const token = jwt.sign(
        result,
        process.env.JWT_SECRET as string,
        { expiresIn: '1d' }
    )
    return ({
        message: "Register successfully",
        token
    })
}

export async function login(data: LoginDto) {
    const existUser = await authRepo.findUserByEmailOrUsername(data.username)
    if (!existUser) {
        throw new Error("User not found")
    }

    const isPasswordCorrect = await bcrypt.compare(data.password, existUser.password)
    if (!isPasswordCorrect) {
        throw new Error("User not found")
    }

    const { password, ...result } = existUser
    const token = jwt.sign(
        result,
        process.env.JWT_SECRET as string,
        { expiresIn: '1d' }
    )
    return ({
        message: "Login successfully",
        token
    })
}