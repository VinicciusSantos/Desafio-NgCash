export interface ICashOutUsecase { 
    execute(userToken: string | undefined, creditedUserId: number, value: number): Promise<any> ;
}