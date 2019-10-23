/**
 ├── routes
 └── index.js
 */
const Router = require('koa-router')

const UsersController = require('../controllers/users')
const DepartmentsController = require('../controllers/departments')
const RolesController = require('../controllers/roles')
const MenusController = require('../controllers/menus')
const RolesMenusController = require('../controllers/roles_menus')
const UsersRolesController = require('../controllers/users_roles')







const router = new Router({
    prefix: '/api/v1'
})



router.post('/user/login', UsersController.login);
router.post('/user/addUser', UsersController.addUser);

router.get('/user/getInfo/:id', UsersController.getInfo);
router.get('/user/getUsersByDepartmentID/:id', UsersController.getUsersByDepartmentID);



router.post('/department/addDepartment', DepartmentsController.addDepartment);
router.post('/department/updateDepartment', DepartmentsController.updateDepartment);

router.get('/department/getDepartments', DepartmentsController.getDepartments);
router.get('/department/deleteDepartment/:id', DepartmentsController.deleteDepartment);



router.get('/role/getRoles/:id', RolesController.getRoles);
router.post('/role/addRole', RolesController.addRole);
router.post('/role/updateRole', RolesController.updateRole);
router.get('/role/deleteRole/:id', RolesController.deleteRole);



router.get('/roles_menus/getMenus', RolesMenusController.getMenus);


module.exports = router
