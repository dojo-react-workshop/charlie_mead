/*
BEFORE

        x x x x x    
                  x x
                    x  x  x
      x x x 
x 
0 1 2 3 4 5 6 7 8 9 10 11 12

*/
/*
AFTER
                  x x  x  x 
      x x x x x x
x 
0 1 2 3 4 5 6 7 8 9 10 11 12

*/

const meetings = [
    {
        startTime: 0,
        endTime: 1
    },
    {
        startTime: 3,
        endTime: 5
    },
    {
        startTime: 4,
        endTime: 8
    },
    {
        startTime: 9,
        endTime: 10
    },
    {
        startTime: 10,
        endTime: 12
    }
]

const output = [
    {
        startTime: 0,
        endTime: 1
    },
    {
        startTime: 3,
        endTime: 8
    },
    {
        startTime: 9,
        endTime: 12
    }
]