const usersDBPath = '../db/students.json';
const partnersDBPath = '../db/partners.json';
const usersDB = require(usersDBPath);
const partnersDB = require(partnersDBPath);
const fs = require('fs');
const path = require('path');

const getUsers = () => {
    return usersDB;
}

const getAllPartners = () => {
    const partnersNames = [];
    partnersDB.forEach(element => {
        let user1,user2;
        user1 = usersDB.filter(usr => {
            return usr.id == element.userid1
        });
        
        user2 = usersDB.filter(usr => {
            return usr.id == element.userid2
        });
        partnersNames.push({
            "user1" : `${user1[0].name} ${user1[0].last}`,
            "user2" : `${user2[0].name} ${user2[0].last}`
        })
    });
    return partnersNames;
}

const editUserName = (name,newName) => {
    let flag = false;
    let errMsg = 'User with First name not found';

    try {
        let pos = usersDB.map(val => val.name).indexOf(name);
        if (pos != -1) {
            usersDB[pos].name = newName;
            flag = true;
        } 
    } 
    catch (e) {
        console.log(e)
    }
    if (flag) return({'flag': flag});
    else return ({
        'flag': flag,
        'msg' : errMsg  
    })
}

const editUserLast = (last,newLast) => {
    let flag = false;
    let errMsg = 'User with Last name not found';
    try {
        let pos = usersDB.map(val => val.last).indexOf(last);
        if (pos != -1) {
            usersDB[pos].last = newLast;
            flag = true;
        }
    } 
    catch (e) {
        console.log(e)
    }
    if (flag) return({'flag': flag});
    else return ({
        'flag': flag,
        'msg' : errMsg  
    })
}

const updateDb = (dbname) => {
    let msg = 'DB not updated';
    switch (dbname) {
        case 'users':
            fs.writeFileSync(path.resolve(__dirname, usersDBPath), JSON.stringify(usersDB));
            msg = 'users DB updated';
            break;
        case 'partners': 
            fs.writeFileSync(partnersDBPath, JSON.stringify(partnersDB));
            msg = 'partners DB updated';
            break;
    }
    return ({'msg': msg});
}


module.exports = {
    getUsers: getUsers,
    getAllPartners: getAllPartners,
    editUserName: editUserName,
    editUserLast : editUserLast,
    updateDb: updateDb
}