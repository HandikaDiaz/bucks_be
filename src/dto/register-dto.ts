export interface RegisterDto { 
    email: string;
    password: string;
    username: string;
    fullname: string;
    gender: Gender;
}

enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}