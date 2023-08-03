
// 넣은것
export interface Board{
    id:string;
    title:string;
    description:string;
    status:BoardStatus;
}
//둘중하나만가능함
export enum BoardStatus{
    PUBLIC ='PUBLIC',
    PRIVATE = 'PRIVATE',
}