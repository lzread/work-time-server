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
const PowerMenuController = require('../controllers/role_power')
const RoleMenuController = require('../controllers/role_menu')
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
router.get('/user/getUserByRoleId/:id', UserController.getUserByRoleId);
router.post('/user/addUser', UserController.addUser);
router.post('/user/updateUser', UserController.updateUser);
router.post('/user/deleteUser/:id', UserController.deleteUser);


router.post('/user_role/addUserRoleBatch/:id', UserRoleController.addUserRoleBatch);



router.get('/power/getPowers', PowerController.getPowers);


/**
 * 部门相关
 */
router.get('/dept/getDepts', DeptController.getDepts);
router.post('/dept/addDept', DeptController.addDept);
router.post('/dept/updateDept', DeptController.updateDept);
router.post('/dept/deleteDept/:id', DeptController.deleteDept);

/**
 * 职务相关
 */
router.get('/job/getJobs', JobController.getJobs);
router.post('/job/addJob', JobController.addJob);
router.post('/job/updateJob', JobController.updateJob);
router.post('/job/deleteJob/:id', JobController.deleteJob);

/**
 * 菜单相关
 */
router.get('/menu/getMenus', MenuController.getMenus);
router.get('/menu/getMenusByUserId/:id', MenuController.getMenusByUserId);
router.get('/menu/getMenuPowersByRoleId/:id', MenuController.getMenuPowersByRoleId);
router.get('/menu/getMenusByRoleId/:id', MenuController.getMenusByRoleId);

/**
 * 角色相关
 */
router.get('/role/getRoles', RoleController.getRoles);
router.post('/role/addRole', RoleController.addRole);
router.post('/role/updateRole', RoleController.updateRole);
router.post('/role/deleteRole/:id', RoleController.deleteRole);




module.exports = router
