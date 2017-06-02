function inOrderSubsets(str, substring='', arr=[]){
    if (str === '') {
        arr.push(substring);
        return;
    }
    const firstChar = str[0];
    str = str.slice(1);

    inOrderSubsets(str, substring, arr);
    inOrderSubsets(str, substring + firstChar, arr);
    
    return arr;
}