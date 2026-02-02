import { useFormEngine } from './form-builder/useFormEngine';
import { userFormSchema } from './form-builder/schema';
import { FormRenderer } from './form-builder/FormRenderer';
import './App.css';

export default function App() {
    const engine = useFormEngine(userFormSchema);

    return (
        <div className="App">
            <h1>Dynamic Form</h1>
            <FormRenderer schema={userFormSchema} engine={engine} values={engine.values} errors={engine.errors} onChange={engine.setValue} />
        <button onClick={engine.validateAllFields}>
                Submit
            </button>
        </div>
    );
}

