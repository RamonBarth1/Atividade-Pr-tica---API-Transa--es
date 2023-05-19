import { v4 as createUuid } from 'uuid';


export class Transaction {

    private _id:string
    
constructor(
    
    public _title:string,
    public _value:number,
    public _type:string
    ){
        this._id = createUuid();
    }

    public get id(){
        return this._id;
    }

    public get title(){
        return this._title;
    }
    
    public get value(){
        return this._value;
    }

    public get type(){
        return this._type;
    }
}