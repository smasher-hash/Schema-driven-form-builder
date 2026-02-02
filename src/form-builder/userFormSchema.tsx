import React from 'react';
import { useFormEngine } from './useFormEngine';
import { userFormSchema } from './schema';
import { FormRenderer } from './FormRenderer';


const engine = useFormEngine(userFormSchema);

export default function App() {
    return (
        <div>
            <button onClick={engine.validateAllFields}>
                Submit
            </button>
            <FormRenderer schema={userFormSchema} engine={engine} values={engine.values} errors={engine.errors} onChange={engine.setValue} />
        </div>
    );
}