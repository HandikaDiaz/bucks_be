import { ProfileDto } from "../dto/profile-dto";
import { prisma } from "../libs/prisma";

export async function findProfile(userId: number) {
    return prisma.profile.findUnique({
        where: { userId },
        include: {
            user: {
                select: {
                    email: true
                }
            }
        }
    })
}