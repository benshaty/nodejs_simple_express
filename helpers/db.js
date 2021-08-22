const users = require('../db/students.json');
const partners = require('../db/partners.json');

const getUsers = () => {
    return users;
}

const getAllPartners = () => {
    const partnersNames = [];
    partners.forEach(element => {
        let user1,user2;
        user1 = users.filter(usr => {
            return usr.id == element.userid1
        });
        
        user2 = users.filter(usr => {
            return usr.id == element.userid2
        });
        partnersNames.push({
            "user1" : `${user1[0].name} ${user1[0].last}`,
            "user2" : `${user2[0].name} ${user2[0].last}`
        })
    });
    return partnersNames;
}

const editUser = () => {
    return({'msg':'edit user'});
}

module.exports = {
    getUsers: getUsers,
    getAllPartners: getAllPartners,
    editUser: editUser
}