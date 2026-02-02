import  { useEffect,useState } from "react";
import type { FieldSchema } from "./types";
import { validateField } from "./validator";

function saveDraft(values: { [key: string]: any }) {
    localStorage.setItem("formDraft", JSON.stringify(values));
}

export function useFormEngine(schema: FieldSchema[]) {
    const [values, setValues] = useState<{ [key: string]: any }>({});
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

    useEffect(() => {
        saveDraft(values);
    }, [values]);

    async function setValue(id: string, value: any) {
    setValues((values)=>({...values,[id]:value}) );
 }
        async function validateAllFields() {
            const newErrors: { [key: string]: string | null } = {};
            for (const field of schema) {
                const error = await validateField(field, values[field.id], values);
                newErrors[field.id] = error;
            }
            setErrors(newErrors);
            return newErrors;
        }
    return {
        values,
        setValue,
        errors,
        validateAllFields,
    };
}