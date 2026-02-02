import  {FormRenderer} from"../form-builder/FormRenderer";
import { useFormEngine } from "../form-builder/useFormEngine";
import   { userFormSchema } from "../form-builder/schema";

export default{
  title: "DynamicForm"
};

export const Primary=() =>{
    const engine=useFormEngine(userFormSchema);
    return <FormRenderer schema={userFormSchema} engine={engine} values={engine.values} errors={engine.errors} onChange={engine.setValue} />;
}

