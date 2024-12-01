let groups = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Moderator' },
    { id: 3, name: 'User' }
];

function getGroups() {
    return groups;
}

function addGroup(name) {
    const newGroup = {
        id: groups.length + 1,
        name
    };
    groups.push(newGroup);