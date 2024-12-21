import { ProfileDto } from "../dto/profile-dto"
import * as profileRepo from "../repositories/profile-repo"

export async function getProfile(userId: number) {
    const profile = await profileRepo.findProfile(userId)
    if (!profile) {
        throw new Error("Profile not found")
    }
    return profile
}