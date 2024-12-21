import { Gender } from "@prisma/client";

export interface ProfileDto {
    fullname: string;
    image: string;
    gender: Gender;
}