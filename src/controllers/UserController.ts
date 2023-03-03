import express,  {Request, Response, response } from "express";
import { UserService } from "../services/UserService";

export class UserController {

    userService: UserService;

    constructor(userService = new UserService()){
        this.userService = userService;
    }

    // request = todos os dados da requesição || response = paramento para enviar info aos usuarios
    createUser = (request: Request, response: Response) => { 
        const user = request.body;

        if(!user.name){
            return response.status(400).json({message: "Bad request: Nome é um campo obrigatório"});
        }
        this.userService.createUser(user.name, user.email);
        return response.status(201).json({message: "Usuário Criado com sucesso!"});
    }

    getAllUser = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers();

        return response.status(200).json(users);
    }

}