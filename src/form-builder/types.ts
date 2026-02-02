export type validator =(value:any, values?:any) => string|null|Promise<string|null>;



export interface FieldSchema{
    id:string;
    label:string;
    type:"text"|"number"|"select"|"multiselect"|"checkbox"|"radio"|"date";
    required?:boolean;
    validate?:validator;
    options?: ()=>Promise<Array<{label:string;value:string}>>;
    
}