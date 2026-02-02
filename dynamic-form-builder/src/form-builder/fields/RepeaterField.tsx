import React from "react";
import { TextField } from "./TextField";
import { Selectfield } from "./Selectfield";

export function RepeaterField({field,value,error,onChange}: any) {
    const getFieldComponent = (type: string): React.FC<any> | null => {
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
    };

    return (
        <div>
            <label>{field.label}</label>
            {value.map((item: any, index: number) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    {field.fields.map((subField: any) => {
                        const FieldComponent = getFieldComponent(subField.type);
                        if (!FieldComponent) return null;
                        return (
                            <div key={subField.name} style={{ marginBottom: '10px' }}>
                                <FieldComponent
                                    field={subField}
                                    value={item[subField.name]}
                                    error={error?.[index]?.[subField.name]}
                                    onChange={(e: any) => {
                                        const newValue = [...value];
                                        newValue[index][subField.name] = e.target.value;
                                        onChange(newValue);
                                    }}
                                />
                            </div>
                        );
                    })}
                    <button
                        type="button"
                        onClick={() => {
                            const newValue = value.filter((_: any, i: number) => i !== index);
                            onChange(newValue);
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={() => {
                    const newItem: any = {};
                    field.fields.forEach((subField: any) => {
                        newItem[subField.name] = '';
                    });
                    onChange([...value, newItem]);
                }}
            >
                Add
            </button>
        </div>
    );
}
