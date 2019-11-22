/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : worktimedb

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2019-11-22 16:39:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dept
-- ----------------------------
DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of dept
-- ----------------------------

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of job
-- ----------------------------

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `component` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `redirect` varchar(255) DEFAULT NULL,
  `hidden` varchar(255) DEFAULT 'false',
  `parent_id` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', 'workflow', '工作流程', '/workflow', '/views/components/Layout', null, '', 'false', '0');
INSERT INTO `menu` VALUES ('2', 'system', '系统设置', '/system', '/views/components/Layout', null, null, 'false', '0');
INSERT INTO `menu` VALUES ('3', 'workflowList', '我的流程', '/workflow/list', '/views/workflow/list', null, null, 'false', '1');
INSERT INTO `menu` VALUES ('4', 'workflowSettings', '功能设置', '/workflow/settings/index', '/views/workflow/settings/index', null, null, 'false', '1');
INSERT INTO `menu` VALUES ('5', 'workflowCategory', '流程分类', '/workflow/settings/category', '/views/workflow/settings/category', null, null, 'false', '4');
INSERT INTO `menu` VALUES ('6', 'workflowTemplate', '流程模板', '/workflow/settings/template', '/views/workflow/settings/template', null, null, 'false', '4');
INSERT INTO `menu` VALUES ('7', 'workflowForms', '流程表单', '/workflow/forms', '/views/workflow/forms/index', null, null, 'false', '1');
INSERT INTO `menu` VALUES ('8', 'workflowFormList', '我的表单', '/workflow/forms', '/views/workflow/forms/index', null, null, 'false', '7');

-- ----------------------------
-- Table structure for power
-- ----------------------------
DROP TABLE IF EXISTS `power`;
CREATE TABLE `power` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `power_name` varchar(255) NOT NULL,
  `power_code` varchar(255) NOT NULL,
  `power_desc` text,
  `power_type` int(11) NOT NULL DEFAULT '0',
  `menu_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of power
-- ----------------------------
INSERT INTO `power` VALUES ('1', '创建', 'create', null, '0', '3');
INSERT INTO `power` VALUES ('2', '编辑', 'edit', null, '1', '3');
INSERT INTO `power` VALUES ('3', '删除', 'remove', null, '1', '3');
INSERT INTO `power` VALUES ('4', '创建', 'create', null, '0', '4');
INSERT INTO `power` VALUES ('5', '编辑', 'edit', null, '1', '4');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_code` varchar(255) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `role_desc` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'admin', '系统超级管理员', null, '-1');
INSERT INTO `role` VALUES ('2', 'system', '系统管理员', null, '-1');
INSERT INTO `role` VALUES ('3', 'editor', '系统编辑者', null, '0');
INSERT INTO `role` VALUES ('4', 'content', '系统内容编辑者', null, '0');

-- ----------------------------
-- Table structure for role_menu
-- ----------------------------
DROP TABLE IF EXISTS `role_menu`;
CREATE TABLE `role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role_menu
-- ----------------------------
INSERT INTO `role_menu` VALUES ('1', '3', '1');
INSERT INTO `role_menu` VALUES ('2', '3', '2');
INSERT INTO `role_menu` VALUES ('3', '3', '3');
INSERT INTO `role_menu` VALUES ('4', '3', '4');
INSERT INTO `role_menu` VALUES ('5', '3', '5');
INSERT INTO `role_menu` VALUES ('6', '3', '6');
INSERT INTO `role_menu` VALUES ('7', '4', '1');

-- ----------------------------
-- Table structure for role_power
-- ----------------------------
DROP TABLE IF EXISTS `role_power`;
CREATE TABLE `role_power` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `power_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role_power
-- ----------------------------
INSERT INTO `role_power` VALUES ('1', '3', '1');
INSERT INTO `role_power` VALUES ('2', '3', '2');
INSERT INTO `role_power` VALUES ('3', '3', '3');
INSERT INTO `role_power` VALUES ('4', '3', '4');
INSERT INTO `role_power` VALUES ('5', '3', '5');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `realname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `introduction` text,
  `status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'm1', '123456', null, null, null, null, null, '0');
INSERT INTO `user` VALUES ('2', 'm2', '123456', null, null, null, null, null, '0');

-- ----------------------------
-- Table structure for user_dept
-- ----------------------------
DROP TABLE IF EXISTS `user_dept`;
CREATE TABLE `user_dept` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_dept
-- ----------------------------

-- ----------------------------
-- Table structure for user_job
-- ----------------------------
DROP TABLE IF EXISTS `user_job`;
CREATE TABLE `user_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_job
-- ----------------------------

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('1', '1', '3');
INSERT INTO `user_role` VALUES ('2', '1', '4');
INSERT INTO `user_role` VALUES ('6', '1', '7');
INSERT INTO `user_role` VALUES ('7', '2', '7');
INSERT INTO `user_role` VALUES ('8', '3', '7');
