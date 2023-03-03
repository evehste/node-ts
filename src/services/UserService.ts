export interface IUser {
    name: string,
    email: string
}

const db = [
    {
        "name": "Evelin",
        "email": "evelin@dio.com",
    }
]


export class UserService {

    db: IUser[];

    constructor( database = db){
       this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user);
        console.log("DB Atualizado!", this.db);
    }

    getAllUsers = () => {
        return this.db;
    }
}