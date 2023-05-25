import express, {Request,Response} from "express"
import { users } from "../database/users";
import { User } from "../models/user";


export class UserController {

    public create (req: Request, res: Response){
        try {
            const {name,cpf,email,age} = req.body
             
            
            if (!name) {
                return res.status(400).send({
                    ok: false,
                    message: "Name was not provided",
                });
            }
        
            if (!cpf) {
                return res.status(400).send({
                    ok: false,
                    message: "Age was not provided",
                });
            }
            
            if (!email) {
                return res.status(400).send({
                    ok: false,
                    message: "CPF was not provided",
                });
            }
        
            if (!age) {
                return res.status(400).send({
                    ok: false,
                    message: "Email was not provided",
                });
            }
          
            const result = users.some(users => users.cpf === cpf)
           
            if(result){
                return res.status(400).json({
                    ok:false,
                    message: "CPF já cadastrado, tente novamente",
                    data: users,
                })
        
            }
        
             const user = new User (name,age,cpf,email)
             users.push(user)

             return res.status(201).send({
                ok: true,
                message:" User was succesfully created",
                data: user,
             })
        }
        
        catch (error:any){
            return res.status(500).send({
                ok:false,
                message: error.toString(),
            })
            }
        }
        
    }

    public list (req: Request, res: Response) {
        
        try {
            
            
            
            
            catch (error:any){
                return res.status(500).send({
                    ok:false,
                    message: error.toString(),
                })
                }
        
    }
}
    }

        
