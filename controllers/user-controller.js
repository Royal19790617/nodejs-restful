const UserService = require("../service/user-service.js");
const APIRes = require("../res-structure.js");

async function addUsers(ctx){
    var user = ctx.request.body;
    console.log(user);
    await UserService.addUser(user);
    ctx.body = new APIRes.resSuccess();
    return ctx.body;
}

async function modifyUser(ctx){
    var user = ctx.request.body;
    console.log(user);
    await UserService.modifyUser(user);
    ctx.body = new APIRes.resSuccess();
    return ctx.body;
}

async function deleteUser(ctx){
    var id = ctx.request.query.username;
    console.log(id);
    await UserService.deleteUser(id);
    ctx.body = new APIRes.resSuccess();
    return ctx.body;
}

async function getUserById(ctx){
    var id = ctx.request.query.username;
    console.log(id);
    var result = await UserService.getUserById(id);
    ctx.body = new APIRes.resSuccess(result);
    return ctx.body;
}

async function getUsers(ctx){
    var result = await UserService.getUsers();
    ctx.body = new APIRes.resSuccess(result);
    return ctx.body;
}
module.exports = {
    getUsers: getUsers,
    addUsers: addUsers,
    modifyUser: modifyUser,
    deleteUser: deleteUser,
    getUserById: getUserById
};
