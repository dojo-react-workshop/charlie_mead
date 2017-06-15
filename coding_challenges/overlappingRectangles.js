module.exports = function getCommonRectangle(...rectangles) {
    return rectangles.reduce((runningOverlap, currentRectangle) => {
        if (runningOverlap === null) {
            return null;
        }
        const xOverlap = getOverlap(
            runningOverlap.leftX,
            runningOverlap.width,
            currentRectangle.leftX,
            currentRectangle.width
        );
        const yOverlap = getOverlap(
            runningOverlap.bottomY,
            runningOverlap.height,
            currentRectangle.bottomY,
            currentRectangle.height
        );

        if (xOverlap === null || yOverlap === null) {
            return null;
        }

        return {
            leftX: xOverlap.startPoint,
            bottomY: yOverlap.startPoint,
            width: xOverlap.length,
            height: yOverlap.length
        }

    });


    function getOverlap(pointA, lengthA, pointB, lengthB) {
        const startPoint = Math.max(pointA, pointB);
        const endPoint = Math.min(pointA + lengthA, pointB + lengthB);

        if (startPoint >= endPoint) {
            return null;
        }

        return {
            startPoint,
            length: endPoint - startPoint
        }
    }

}


/*

3,12
    S-------------
----E
0,5







------------
   -----

------ 
        -------

*/
