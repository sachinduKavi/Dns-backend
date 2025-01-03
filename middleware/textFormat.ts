function checkFormat(str: string): boolean {
    return /^[a-z ]+$/.test(str);
}


export {
    checkFormat
}