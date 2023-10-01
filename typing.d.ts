export interface QueryParameters{
    queryparams:Parameters
    isdynamic: boolean
   
}
interface Parameters{
    keywords: string | ReadonlyURLSearchParams,  
    offset: string,
    categories: string | undefined,
    source: String
}
export interface modifiedParameters extends Parameters{

    access_key: String ,
    
}
interface Pagination{
    limit:number,
    offset: number,
    count: number,
    total: number,
}
interface Article{
    author? : String,
    title: String,
    description: String,
    url: String,
    image?: String,
    source: String,
    category: String,
    language: String,
    country: String,
    published_at: String
}
export interface AllData{
     pagination: Pagination,
     data: Article[],
}
export interface Details{
    image: string,
    description: String,
    published_at: string,
    title: String
}