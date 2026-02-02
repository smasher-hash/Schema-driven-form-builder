const KEY ="dynamic-form-builder-autosave";

export function saveFormData(data:Record<string,any>){
    try{
        const serializedData = JSON.stringify(data);
        localStorage.setItem(KEY,serializedData);
    }catch(e){
        console.error("Error saving form data:",e);
    }
}

export function loadFormData():Record<string,any>|null{
    try{
        const serializedData = localStorage.getItem(KEY);
        if(serializedData){
            return JSON.parse(serializedData);
        }
        return null;
    }catch(e){
        console.error("Error loading form data:",e);
        return null;
    }
}

export function clearFormData(){
    try{
        localStorage.removeItem(KEY);
    }catch(e){
        console.error("Error clearing form data:",e);
    }
}