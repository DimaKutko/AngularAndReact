import { IArt } from "./art";

export interface IAuthor{
    id : string; 
    name : string; 
    arts : IArt[]; 
}