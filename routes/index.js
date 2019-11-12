/**
 ├── routes
 └── index.js
 */
const Router = require('koa-router')



const UserController = require('../controllers/user')
const DeptController = require('../controllers/dept')
const JobController = require('../controllers/job')
const MenuController = require('../controllers/menu')
//const PowerController = require('../controllers/power')
const RoleController = require('../controllers/role')

const RoleMenuController = require('../controllers/role_menu')
// const RolePowerController = require('../controllers/role_power')

const UserDeptController = require('../controllers/user_dept')
const UserJobController = require('../controllers/user_job')
const UserRoleController = require('../controllers/user_role')







const router = new Router({
    prefix: '/api'
})

//router.get('/power_menu/getRoleIdByMenuId/:role_id', PowerMenuController.getRoleIdByMenuId);
//router.post('/power_menu/addPowerMenu/:role_id', PowerMenuController.addPowerMenu);

/**
 * 用户相关
 */
router.post('/user/login', UserController.login);
router.get('/user/getInfo/:id', UserController.getInfo);
router.get('/user/getUsers', UserController.getUsers);
router.post('/user/addUser', UserController.addUser);
router.post('/user/updateUser', UserController.updateUser);
router.get('/user/deleteUser/:id', UserController.deleteUser);

/**
 * 部门相关
 */
router.get('/dept/getDepts', DeptController.getDepts);
router.post('/dept/addDept', DeptController.addDept);
router.post('/dept/updateDept', DeptController.updateDept);
router.get('/dept/deleteDept/:id', DeptController.deleteDept);

/**
 * 职务相关
 */
router.get('/job/getJobs', JobController.getJobs);
router.post('/job/addJob', JobController.addJob);
router.post('/job/updateJob', JobController.updateJob);
router.get('/job/deleteJob/:id', JobController.deleteJob);

/**
 * 菜单相关
 */
router.get('/menu/getMenus', MenuController.getMenus);
router.post('/menu/addMenu', MenuController.addMenu);
router.post('/menu/updateMenu', MenuController.updateMenu);
router.get('/menu/deleteMenu/:id', MenuController.deleteMenu);



/**
 * 角色相关
 */
router.get('/role/getRoles', RoleController.getRoles);
router.post('/role/addRole', RoleController.addRole);
router.post('/role/updateRole', RoleController.updateRole);
router.get('/role/deleteRole/:id', RoleController.deleteRole);


module.exports = router
