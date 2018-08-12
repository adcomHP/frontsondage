export class UserForm {
    nom: string;
    prenom: string;
    cin: string;
    email: string;
    tel: number;
    birth_date: Date;
    imageuser: string | any;
    gender: string;
    password: string;

    constructor() {
    }

    public static isNull(user: UserForm): boolean {

        return user.nom === null &&
            user.prenom === null &&
            user.cin === null &&
            user.email === null &&
            user.tel === null &&
            user.birth_date === null &&
            user.gender === null &&
            user.birth_date === null &&
            user.password === null;
    }
}