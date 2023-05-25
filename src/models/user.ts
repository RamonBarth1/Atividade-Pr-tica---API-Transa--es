import { Transaction } from "./transactions";
import { v4 as createUuid } from 'uuid';

export class User {
    private _id:string
    protected transactions:Transaction[]
    constructor (
        public _name: string,
        public _cpf:string,
        public _email:string,
        public _age:number,
    ){
        this._id = createUuid();
    }

    public get id(){
        return this._id;
    }

    public get name(){
        return this._name;
    }

    public get cpf(){
        return this._cpf;
    }

    public get email(){
        return this._email;
    }

    public get age(){
        return this._age;
    }

    public get transaction(){
        return this.transactions;
    }

    public toJson() {
        return {
            name: this._name,
            cpf: this._cpf,
            email: this._email,
            age: this._age,
            transaction: this.transactions
        }
    }
}