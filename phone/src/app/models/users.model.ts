export class UsersModel{
    constructor(
        public idusers : number,
        public login : string,
        public password : string,
        public nom : string,
        public prenom : string,
        public telephone : number,
        public email : string,
        public adresse : string,
        public avatar : string,
    ){}
    }