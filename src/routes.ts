import { Router } from "express";
import express,  {Request, Response } from "express"; //
import { UserController } from "./controllers/UserController";

export const router = Router();

const userController = new UserController();


router.get("/user", userController.getAllUser);
router.post("/user", userController.createUser);
router.delete("/user", (request: Request, response: Response) => {
    const user = request.body;
    return response.status(200).json({messagem: "Usuário excluido com sucesso!"});
});