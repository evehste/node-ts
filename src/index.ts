import express,  {Request, Response } from "express";
import { router } from "./routes";

//import { UserController } from "./controllers/UserController";
//const userController = new UserController();

const server = express();

server.use(express.json());
server.use(router);

server.get("/", (request: Request, response: Response) => { 
    return response.status(200).json({message: "Diobank API"}); // resposta quando o status for 200
});


server.listen(5000, ()=> { // definindo qual porta estará online
    console.log("Server on http://localhost:5000");
});