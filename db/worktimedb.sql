/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : worktimedb

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 24/10/2019 22:03:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for departments
-- ----------------------------
DROP TABLE IF EXISTS `departments`;
CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `parentId` int(11) DEFAULT NULL,
  `desc` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `MenuName` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of menus
-- ----------------------------
BEGIN;
INSERT INTO `menus` VALUES (1, 'flow');
INSERT INTO `menus` VALUES (2, 'flowList');
INSERT INTO `menus` VALUES (3, 'flowSettings');
INSERT INTO `menus` VALUES (4, 'flowCategory');
INSERT INTO `menus` VALUES (5, 'flowTemplate');
INSERT INTO `menus` VALUES (6, 'forms');
INSERT INTO `menus` VALUES (7, 'system');
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES (1, 'admin');
INSERT INTO `roles` VALUES (2, 'editor');
INSERT INTO `roles` VALUES (3, 'developer');
COMMIT;

-- ----------------------------
-- Table structure for roles_menus
-- ----------------------------
DROP TABLE IF EXISTS `roles_menus`;
CREATE TABLE `roles_menus` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RoleId` int(11) NOT NULL,
  `MenuId` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of roles_menus
-- ----------------------------
BEGIN;
INSERT INTO `roles_menus` VALUES (1, 3, 1);
INSERT INTO `roles_menus` VALUES (2, 3, 2);
INSERT INTO `roles_menus` VALUES (3, 3, 3);
INSERT INTO `roles_menus` VALUES (4, 3, 4);
INSERT INTO `roles_menus` VALUES (5, 3, 5);
INSERT INTO `roles_menus` VALUES (6, 2, 6);
INSERT INTO `roles_menus` VALUES (7, 2, 7);
INSERT INTO `roles_menus` VALUES (8, 2, 2);
INSERT INTO `roles_menus` VALUES (9, 2, 1);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(255) NOT NULL,
  `UserPass` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'lizhuang', '123456');
INSERT INTO `users` VALUES (2, 'lzread', '123456');
INSERT INTO `users` VALUES (3, 'eason', '123456');
COMMIT;

-- ----------------------------
-- Table structure for users_roles
-- ----------------------------
DROP TABLE IF EXISTS `users_roles`;
CREATE TABLE `users_roles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `RoleId` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users_roles
-- ----------------------------
BEGIN;
INSERT INTO `users_roles` VALUES (1, 1, 1);
INSERT INTO `users_roles` VALUES (2, 1, 2);
INSERT INTO `users_roles` VALUES (3, 1, 3);
INSERT INTO `users_roles` VALUES (4, 2, 2);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
