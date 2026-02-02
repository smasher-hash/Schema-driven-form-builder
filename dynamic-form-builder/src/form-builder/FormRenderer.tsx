import type { FieldSchema } from "./types";
import {TextField} from"./fields/TextField";
import {Selectfield} from"./fields/Selectfield";
import {RepeaterField} from"./fields/RepeaterField";
import React from "react";
import type { useFormEngine } from "./useFormEngine";
function getFieldComponent(type: string): React.FC<any> | null {
    switch (type) {
        case "text":
             return TextField;
        case "select":
             return Selectfield;
        case "repeater":
            return RepeaterField;
        default:
              return null;
    }
}
interface FormRendererProps {
    schema: FieldSchema[];
    engine:ReturnType<typeof useFormEngine>;
    values: { [key: string]: any };
    errors: { [key: string]: string | null };
    onChange: (id: string, value: any) => void;
}

export const FormRenderer: React.FC<FormRendererProps> = ({ schema, engine, values, errors, onChange }) => {
    return (
        <form>
            {schema.map((field) => {
                const FieldComponent = getFieldComponent(field.type);
                if (!FieldComponent) return null;

                return (
                    <div key={field.id} style={{ marginBottom: '15px' }}>
                        <FieldComponent
                            field={field}
                            value={values[field.id]}
                            error={errors[field.id]}
                            onChange={(e: any) => onChange(field.id, e.target.value)}
                        />
                        {errors[field.id] && <div style={{ color: 'red' }}>{errors[field.id]}</div>}
                    </div>
                );
            })}
        </form>
    );
};