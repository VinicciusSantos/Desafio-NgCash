export interface IGetBalanceUsecase { 
    execute(userToken: string | undefined): Promise<any> ;
}