// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

export function organizePricesByKey(arr) {
    let accObj = {};
    arr.map(item => accObj[item.id] = item.price);
    return accObj;
}

/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
    let acc = {};
    arr.map(item => {
        acc[item.id] = item;
    });
    return acc;
}


/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategoryWithForEach(arr) {
    let newObj = {
        fruit: 0,
        other: 0,
        dairy: 0,
    };

    arr.forEach(item => {
        if(item.category === 'dairy'){
            newObj.dairy += 1;
        }
        if(item.category === 'fruit'){
            newObj.fruit++;
        }
        if(item.category === 'other'){
            newObj.other++;
        }
    });
    return newObj;
}


export function countByCategoryWithFilter(arr) {

    const newObj = {
        fruit: arr.filter(item => item.category === 'fruit').length,
        other: arr.filter(item => item.category === 'other').length,
        dairy: arr.filter(item => item.category === 'dairy').length
    };

    return newObj;
}


export function countByCategoryWithReduce(arr) {
    return arr.reduce((newObj, item) => {
        if(item.category === 'dairy'){
            newObj.dairy += 1;
        }
        if(item.category === 'fruit'){
            newObj.fruit++;
        }
        if(item.category === 'other'){
            newObj.other++;
        }
    
        return newObj;

    }, { fruit: 0, other: 0, dairy: 0 });
}

