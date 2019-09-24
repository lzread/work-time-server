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
router.post('/user/create', UsersController.create);
router.post('/user/login', UsersController.login);
// 获取用户详情接口（路由）
router.get('/user/getInfo/:id', UsersController.getInfo);
// 获取用户列表（路由）
router.get('/user/getUsersListByDepartmentId/:id', UsersController.getUsersListByDepartmentId);

module.exports = router
