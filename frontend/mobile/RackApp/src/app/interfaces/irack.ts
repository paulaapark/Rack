import { Iuser } from "./iuser";

export interface Irack {
    id:number;
    Title:string;
    Description:string;
    Season:string;
    Type:number;
    Image:string;
    User_id:Iuser;
}
