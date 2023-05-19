import express, {Request,Response} from "express"
import User from "./models/user"


const app = express();
app.use(express.json());

// POST Users

app.post ("/users", (req:Request, res:Response ) => {
    
    try {
    const {name,cpf,email,age,} = req.body
    


}

catch (error:any){
    return res.status(500).send({
        ok:false,
        message: error.toString(),
    })
    }
})












app.listen(3333, () => {
    console.log(" Api rodando ...");
    
})