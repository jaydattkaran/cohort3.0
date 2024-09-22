function greet(users) {
    return users.filter(user => user.age > 18 && user.gender === 'male');
}

let users = [{
    name: "A",
    age: 21,
    gender: "male"
}, {
    name: "B",
    age: 11,
    gender: "male"
}, {
    name: "d",
    age: 19,
    gender: "male"
}, {
    name: "C",
    age: 21,
    gender: "female"
}]

let data = greet(users);
console.log(data);