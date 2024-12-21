import * as profileService from "../services/profile-service"

export async function getProfile(req: any, res: any) {
    try {
        const userId = req.user.id
        const profile = await profileService.getProfile(userId)
        res.json(profile)
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}