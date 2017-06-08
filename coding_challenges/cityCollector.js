// Given a data structure that looks like the following:

var data = [
    {
        "name": "Mrs. Ryann Pollich",
        "phoneNumber": "072.495.6727 x51077",
        "id": "71534730-b80e-4502-ac3b-f926f60cfb43",
        "city": "Seattle"
    },
    {
        "name": "Darrin Legros",
        "phoneNumber": "1-237-600-3031 x8987",
        "id": "ddc8865d-49cc-403c-8b0c-7b0bcb523b6c",
        "city": "Milwaukee"
    },
    {
        "name": "Hailey Zulauf",
        "phoneNumber": "274.977.3545 x30966",
        "id": "f7b9ca88-0837-48c2-8f38-4dd677c3ae73",
        "city": "Milwaukee"
    },
    {
        "name": "Eloisa Leffler",
        "phoneNumber": "349-099-9899",
        "id": "e712b1c3-2688-4dcb-9bd6-61ae359a4d44",
        "city": "New York"
    },
    {
        "name": "Monroe Conn",
        "phoneNumber": "065.782.0601",
        "id": "0a98d5b8-0182-4850-b02a-26697d81cfa6",
        "city": "Milwaukee"
    },
    {
        "name": "Adela Waters",
        "phoneNumber": "(105) 106-5951 x2761",
        "id": "10031aa6-480a-4d78-b9f2-22801e49e495",
        "city": "Milwaukee"
    },
    {
        "name": "Carleton Cole",
        "phoneNumber": "1-373-936-6919",
        "id": "fb04e4bf-9ecc-43bc-8f09-bd2b00c60c09",
        "city": "Houston"
    },
    {
        "name": "Mrs. Lisandro Schmitt",
        "phoneNumber": "828-838-2728",
        "id": "0767e135-699b-4d7e-be12-c7030b49d62e",
        "city": "Milwaukee"
    },
    {
        "name": "Allen Stamm",
        "phoneNumber": "035-252-4802 x583",
        "id": "61ce67bc-79b4-4668-acd7-c8d070996e04",
        "city": "Seattle"
    },
    {
        "name": "Dr. Sigrid Gottlieb",
        "phoneNumber": "794.408.2508",
        "id": "cb787bf9-a092-48a5-ba61-8869489d6460",
        "city": "New York"
    }
];

// Write an algorithm that returns an array of unique cities (order doesn't matter). In this case:
// yourFunc(data) could return ['Seattle', 'Milwaukee', 'New York', 'Houston']

function cityBuilder(arr) {
    const results = arr.reduce((accum, personObj) => {
        let city = personObj.city;
        accum[city] = true;
        return accum;
    }, {})

    return Object.keys(results);
}

console.log(cityBuilder(data))