export class User {
    uid: string;
    name: string;
    email: string;
    password: string;
    picture?: string;
    status: string;

    constructor(obj?: any, uid?: string ) {
        this.uid = uid || obj?.uid || ''; 
        this.name = obj?.name || '';
        this.email = obj?.email || '';
        this.password = obj?.password || '';
        this.picture = obj?.picture || '';
        this.status = obj?.status || '';
    }

    public toJSON() {
        return {
            uid: this.uid,
            name: this.name,
            email: this.email,
            password: this.password,
            picture: this.picture,
            status: this.status
        };
    }
}