import { RegisterDto } from "../dto/register-dto";
import { prisma } from "../libs/prisma";

export async function findUserByEmailOrUsername(usernameOrEmail: string) {
    return prisma.user.findFirst({
        where: {
            OR: [
                { profile: { username: usernameOrEmail } },
                { email: usernameOrEmail }
            ]
        }
    })
};

export async function createUser(data: RegisterDto) {
    return prisma.user.create({
        data: {
            email: data.email,
            password: data.password,
            profile: {
                create: {
                    username: data.username,
                    fullname: data.fullname,
                    gender: data.gender,
                    image: "https://i.pinimg.com/736x/8f/b2/ba/8fb2bae4938fb58ea89b4c5a00613eb2.jpg"
                }
            }
        }
    })
};