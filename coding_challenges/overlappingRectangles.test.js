const findIntersection = require('./rectangularLove');

test("finds the intersection of two users' love rectangles", () => {
    const rectangleA = {

        // coordinates of bottom-left corner
        leftX: 1,
        bottomY: 5,

        // width and height
        width: 10,
        height: 4,

    };

    const rectangleB = {

        // coordinates of bottom-left corner
        leftX: 3,
        bottomY: 3,

        // width and height
        width: 5,
        height: 4,

    };

    const answer = {
        leftX: 3,
        bottomY: 5,
        height: 2,
        width: 5
    }

    expect(findIntersection(rectangleA, rectangleB)).toEqual(expect.objectContaining(answer))
})

test("it returns null if rectangles don't overlap", () => {
    const rectangleA = {

        // coordinates of bottom-left corner
        leftX: 1,
        bottomY: 5,

        // width and height
        width: 3,
        height: 4,

    };

    const rectangleB = {

        // coordinates of bottom-left corner
        leftX: 5,
        bottomY: 3,

        // width and height
        width: 5,
        height: 4,

    };

    expect(findIntersection(rectangleA, rectangleB)).toBe(null);
})

test("it returns null if an edge is shared but with no overlap", () => {
    const rectangleA = {

        // coordinates of bottom-left corner
        leftX: 1,
        bottomY: 5,

        // width and height
        width: 3,
        height: 4,

    };

    const rectangleB = {

        // coordinates of bottom-left corner
        leftX: 0,
        bottomY: 5,

        // width and height
        width: 1,
        height: 4,

    };

    expect(findIntersection(rectangleA, rectangleB)).toBe(null);
})

test("it works if one rectangle contained within another", () => {
    const rectangleA = {

        // coordinates of bottom-left corner
        leftX: 1,
        bottomY: 5,

        // width and height
        width: 3,
        height: 4,

    };

    const rectangleB = {

        // coordinates of bottom-left corner
        leftX: 2,
        bottomY: 6,

        // width and height
        width: 1,
        height: 1,

    };

    expect(findIntersection(rectangleA, rectangleB)).toEqual(expect.objectContaining(rectangleB));
    expect(findIntersection(rectangleB, rectangleA)).toEqual(expect.objectContaining(rectangleB));
})