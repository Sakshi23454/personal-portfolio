export type SIGNIN_REQUEST = {
    email: string,
    password: string,
}

export type SIGNIN_RESPONSE = {
    message: string,
    result: {
        _id: string,
        name: string,
        email: string,
        mobile: string,
        role: string,
    }
}