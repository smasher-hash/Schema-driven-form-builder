import type { FieldSchema } from "./types";
export async function validateField(
    field: FieldSchema, 
    value: any,
    values?: any): Promise<string | null> {
    if (field.required && !value) {
        return "This field is required";
    }
    if (field.validate) {
        field.validate(value, values);
    }
       
    return null;
}