export interface IShowAccountUsecase { 
    execute(userId: number): Promise<any>; 
}