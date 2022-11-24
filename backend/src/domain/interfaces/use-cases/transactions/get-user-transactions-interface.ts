export interface querieParams {
    filter: string,
    order: string,
    desc: string | boolean
}

export interface IGetUserTransactionsUsecase { 
    execute(userToken: string | undefined, queries: querieParams | any): Promise<any> ;
}
