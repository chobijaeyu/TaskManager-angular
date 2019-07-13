export interface tasklist {
    ID: number,
    Title: string,
    Taskitem:taskitem[]
    Prefix: string,
    EndNum:number
}
export interface taskitem {
    Id: number,
    CurrentNum: number,
    Notice: string
}