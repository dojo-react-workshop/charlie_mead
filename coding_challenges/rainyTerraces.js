function getWaterVolume(arrOfTerraces){
    let volume = 0;
    let maxIdx = 0;
    let leftBound = arrOfTerraces[0];
    let rightBound = arrOfTerraces[arrOfTerraces.length - 1];
    
    for (let i = 1; i < arrOfTerraces.length; i +=1 ){
        if (arrOfTerraces[i] > arrOfTerraces[maxIdx]){
            maxIdx = i;
        }
    }

    for (let i = 1; i < maxIdx; i += 1){
        if (arrOfTerraces[i] < leftBound) {
            volume += leftBound - arrOfTerraces[i];
        } else {
            leftBound = arrOfTerraces[i];
        }
    }

    for (let i = arrOfTerraces.length - 2; i > maxIdx; i -= 1){
        if (arrOfTerraces[i] < rightBound) {
            volume += rightBound - arrOfTerraces[i];
        } else {
            rightBound = arrOfTerraces[i];
        }
    }

    return volume;
}


















