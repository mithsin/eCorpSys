export const capitalString = (string) => {
    let newString, firstString;
    newString = string.split(/(?=[A-Z])/);
    firstString = newString[0].charAt(0).toUpperCase() + newString[0].slice(1) + " " + newString.slice(1).join(' ');
    return  firstString;
};

export const tableFormatter = (prop) => {
    const key = prop[0];
    const value = prop[1];

    const typeIsArray = ["status"].find(ele => ele === key);
    // const typeIsString = [].find(ele=> ele === key);
    const typeIsPercentage = ["comopleted"].find(ele => ele === key);

    if(typeIsArray){
        return {type: "array", value}
    }
    if(typeIsPercentage){
        return {type: "percent", value: `${value}%`}
    }
    if(typeof value === "boolean") {
        return value ? "Y" : "N";
    }
    // if(typeIsString){
    //     return {type: "string", value}
    // }
    return {type: "show", value}
    


    // const newProp = (typeof prop === "string" && prop) || (typeof prop === "boolean" && prop === true ? "Y" : "N") ;
    // if( typeof prop === "string" ) {
    //     return prop
    // } else if ( typeof prop === "boolean" ) {
    //     return prop ? "Y" : "N"
    // } else if ( typeof porp === "object") {
        
    // } else {
    //     return
    // }
}