Array.prototype.map = function(callback){
    const newArray = [];

    for (let i = 0; i < this.length; i += 1){
        newArray.push(callback(this[i]));
    }
    
    return newArray;
}




