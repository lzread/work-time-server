/**
 ├── routes
 └── index.js
 */
const Router = require('koa-router')
const UsersController = require('../controllers/users')
const DepartmentsController = require('../controllers/departments')
const router = new Router({
    prefix: '/api/v1'
})

/**
 * 用户接口
 */
// 创建用户接口
router.post('/user/create', UsersController.create);
router.post('/user/login', UsersController.login);
// 获取用户详情接口
router.get('/user/getInfo/:id', UsersController.getInfo);
// 获取用户列表
router.get('/user/getList/:id', UsersController.getList);

/**
 * 部门接口
 */
//创建部门
router.post('/departments/create', DepartmentsController.create);
//编辑部门
router.post('/departments/edit', DepartmentsController.edit);
// 获取部门树
router.get('/departments/getTreeList/:id', DepartmentsController.getTreeList);

module.exports = router
