function getProducts(array){
    const beforeProds = [];
    let rollingProd = 1;
    for(let i = 0; i < array.length; i+=1){
        beforeProds[i] = rollingProd;
        rollingProd *= array[i]
    }
    // build an array of after products
    const afterProds = [];
    rollingProd = 1;
    for(let i = array.length - 1; i >= 0; i-=1){
        afterProds[i] = rollingProd; // [undefined,undefined,4,1]
        rollingProd *= array[i]
    }
    
    // build an array of before * after products
    const finalProds = [];
    for(let i = 0; i < array.length; i+=1){
        finalProds[i] = beforeProds[i] * afterProds[i];
    }

    return finalProds;

}

console.log(getProducts([1,3,4,2]))