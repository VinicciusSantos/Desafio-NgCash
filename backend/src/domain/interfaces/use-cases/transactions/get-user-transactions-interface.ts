export interface IGetUserTransactionsUsecase { 
    execute(userToken: string | undefined): Promise<any> ;
}