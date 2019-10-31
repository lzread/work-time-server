/**
 ├── routes
 └── index.js
 */
const Router = require('koa-router')



const UserController = require('../controllers/user')
const DeptController = require('../controllers/dept')
const JobController = require('../controllers/job')
const MenuController = require('../controllers/menu')
const PowerController = require('../controllers/power')
const RoleController = require('../controllers/role')

const RoleMenuController = require('../controllers/role_menu')
const RolePowerController = require('../controllers/role_power')

const UserDeptController = require('../controllers/user_dept')
const UserJobController = require('../controllers/user_job')
const UserRoleController = require('../controllers/user_role')







const router = new Router({
    prefix: '/api'
})



router.post('/user/login', UserController.login);
router.get('/user/getInfo/:id', UserController.getInfo);



router.get('/menu/getMenus', MenuController.getMenus);
router.post('/menu/addMenu', MenuController.addMenu);
router.post('/menu/updateMenu', MenuController.updateMenu);
router.get('/menu/deleteMenu/:id', MenuController.deleteMenu);

module.exports = router
