export const required = value => {
    if(value){
        return undefined;
    }else{
        return "Field is required";
    }
}

export const maxLength = (maxLength) => (value) =>  {
    if(value && value.length > maxLength){
        return `Sorry. Max length is until ${maxLength} symbols.`;
    }else{
        return undefined;
    }
}