import { IUser, UserService } from "./UserService"


describe("UserService", ()=> {
    const mockdb: IUser[] = [];
    const userService = new UserService(mockdb);
    it("Deve adicionar um novo usuário", () => {
        const mockConsole = jest.spyOn(global.console, "log");
        userService.createUser("Stefani", "stefani@dio.com");
        expect(mockConsole).toHaveBeenCalledWith("DB Atualizado!", mockdb);
    })
})