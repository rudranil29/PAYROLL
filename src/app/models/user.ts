export interface User {
    error: boolean,
    message: string,
    token: string,
    payload?: {
        id?: string,
        designation?: string,
        name?: string,
        email?:string,
        isAdmin?: boolean
    }
}