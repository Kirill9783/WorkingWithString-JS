const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

function filterAndSortUsers(users) {
    return filterAndSortUsers = users
                                .filter(age => age[1] > 25 && age[2] === true)
                                .sort((a, b) => a[1] - b[1])
                                .map(age => age[0]);
}

const sportUsersOver25 = filterAndSortUsers(users);

console.log(sportUsersOver25);