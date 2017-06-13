declare interface ReqObj{
    collections : {
        articles: any,
        users: any
    },
    models: any,
    session: any
}

declare interface User {
    email: string,
    admin: boolean,
    password: string
}