const person = {
    name: 'Anton',
    age: 32,
    city: 'London'
};


for ( const key in person ) {
    console.log (`Key: ${key}, Value: ${person[key]} `);
}
