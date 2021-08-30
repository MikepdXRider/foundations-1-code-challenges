// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let accArr = [];
    arr.forEach(item => accArr.push(item.name));
    return accArr;
}
/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let accArr1 = [];
    arr.forEach(item => accArr1.unshift(item.type));
    return accArr1;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let acc = [];
    arr.forEach(item => {
        const newObj = {
            nombre: item.name,
            tipo: item.type
        };
        acc.push(newObj);
    });
    return acc;
}

