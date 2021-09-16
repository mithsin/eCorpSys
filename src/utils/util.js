export const capitalString = (string) => {
    let newString, firstString;
    newString = string.split(/(?=[A-Z])/);
    firstString = newString[0].charAt(0).toUpperCase() + newString[0].slice(1) + " " + newString.slice(1).join(' ');
    return  firstString;
};