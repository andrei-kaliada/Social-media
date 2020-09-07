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

export const emailSumbol = (value) => {
    console.log(value);
    if(value.indexOf('@') === -1){
        return `You mast input @ in your email adress.`;
    }
}