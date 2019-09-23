/**
 ├── routes
 └── index.js
 */
const Router = require('koa-router')
const UsersController = require('../controllers/users')

const router = new Router({
    prefix: '/api/v1'
})

/**
 * 用户接口
 */
// 创建用户接口（路由）
router.post('/users/create', UsersController.create);
router.get('/users/login/:tel/:password', UsersController.login);
// 获取用户详情接口（路由）
router.get('/users/getUserById/:id', UsersController.detail);
// 获取用户列表（路由）
router.get('/users/list', UsersController.list);


module.exports = router
