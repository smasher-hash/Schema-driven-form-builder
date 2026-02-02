import type { FieldSchema } from "./types";
import "../App.css";

export const userFormSchema: FieldSchema[] = [
    {
        id: "firstName",
        label: "First Name",
        type: "text",
        required: true,
        validate: (value: string) => value.length >= 2?null:"First name must be at least 2 characters long"
    },

    {
        id: "lastName",
        label: "Last Name",
        type: "text",
        required: true,
        validate: (value: string) => value.length >= 2?null:"Last name must be at least 2 characters long"
    },
    
    {
        id: "role",
        label: "Role",
        type: "select",
        options: async()=>[
            { label: "student", value: "student" },
            { label: "teacher", value: "teacher" },
            { label: "admin", value: "admin" },
            {label:"professional",value:"professional"}
        ]
    },
    {
        id: "experience",
        label: "Experience Level",
        type: "select",
    
        options: async()=>[
            { label: "Beginner", value: "beginner" },
            { label: "Intermediate", value: "intermediate" },
            { label: "Advanced", value: "advanced" }
        ]
    }
];