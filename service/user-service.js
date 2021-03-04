var User = require("../model/user.js");

module.exports = {
    getUsers: () => {
        var opt = {"username": 1 ,"userpwd": 1,"userage": 1 ,"_id": 0};
        return User.find({}, opt).exec();
    },

    getUserById: (id) => {
        var wherestr = {'username' : id};
        var opt = {"username": 1 ,"userpwd": 1,"userage": 1 ,"_id": 0};
        return User.find(wherestr, opt).exec();
    },

    addUser: (user) => {     
        User.create(user);
    },

    modifyUser: (user) => {
        var wherestr = {'username' : user.username};
        var updatestr = user;
        
        User.updateOne(wherestr, updatestr).exec();

    },

    deleteUser: (id) => {
        var wherestr = {'username' : id};
    
        User.deleteOne(wherestr).exec();
    }
};
