// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    const objArr = Object.keys(someObject);
    return objArr.join();
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    const objKeyArray = Object.keys(someObject);
    let accObj = {};
    objKeyArray.map(item => {
        accObj[item.toUpperCase()] = someObject[item];
    });
    return accObj;
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/


export function makeTuples(someObject) {
    const objKeyArray = Object.keys(someObject);
    let acc = [];
    objKeyArray.map(item => acc.push([item, someObject[item]]));
    return acc;
}
