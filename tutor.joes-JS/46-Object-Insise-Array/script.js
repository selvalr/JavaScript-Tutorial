const users = [
    { name: 'joes', age: 25, email: 'joes@gmail.com' },
    { name: 'ram', age: 32, email: 'ram@gmail.com' },
    { name: 'sam', age: 45, email: 'sam@gmail.com' }
];

//
for (const user of users) {
    console.log(user.name);
}

//
const olderUsers = users.filter(user =>user.age> 30);
console.log(olderUsers);