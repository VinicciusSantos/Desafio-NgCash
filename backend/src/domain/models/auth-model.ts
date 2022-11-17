export interface LoginRequestModel {
    username: string
    password: string
}

export interface LoginResponseModel {
    token: string
}

export interface RegisterRequestModel {
    username: string
    password: string
}