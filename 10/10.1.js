let company = {
    sales:[{name: 'John', salary: 1000},{name: 'Alice', salary: 600}],
    development:{
        web:[{name: 'Peter',salary: 2000},{name: 'Alex', salary: 1800 }],
        internals:[{name: 'Jack',salary: 1300}]
    }
}


 function allSalary(n) {
    if (Array.isArray (n)){
        return n.reduce((sum , person) => sum + person.salary, 0);
    } else {
        return Object.values(n).reduce((sum , dep) => sum + allSalary(dep),0)
    }
}
