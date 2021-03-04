 const router = require('koa-router')(); 
 const userctrl = require('./controllers/user-controller');   // 引入用户模块逻辑层
 
 module.exports = (app) => {
    router
       .get('/api/users/list',userctrl.getUsers)    
       .get('/api/users',userctrl.getUserById)
       .post('/api/users',userctrl.addUsers)  
       .put('/api/users',userctrl.modifyUser)
       .delete('/api/users',userctrl.deleteUser)
    app.use(router.routes()).use(router.allowedMethods());
}