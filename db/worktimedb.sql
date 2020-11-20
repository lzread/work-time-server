-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-11-13 15:37:02
-- 服务器版本： 5.5.62-log
-- PHP 版本： 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `worktimedb`
--

-- --------------------------------------------------------

--
-- 表的结构 `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `component` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `redirect` varchar(255) DEFAULT NULL,
  `hidden` varchar(255) DEFAULT 'false',
  `parent_id` varchar(255) DEFAULT '0',
  `type` int(11) DEFAULT '0',
  `sort` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `menu`
--

INSERT INTO `menu` (`id`, `name`, `title`, `path`, `component`, `icon`, `redirect`, `hidden`, `parent_id`, `type`, `sort`) VALUES
(1, 'system', '系统管理', '/system', '/views/components/Layout', NULL, NULL, 'false', '0', 0, 0),
(2, 'menus', '菜单管理', '/system/menus', '/views/system/menus', NULL, NULL, 'false', '1', 0, 0),
(3, 'roles', '角色管理', '/system/roles', '/views/system/roles', NULL, NULL, 'false', '1', 0, 0),
(4, 'ADD', '新建角色', NULL, NULL, NULL, NULL, 'false', '3', 1, 0),
(5, 'EDIT', '编辑角色', NULL, NULL, NULL, NULL, 'false', '3', 1, 0),
(6, 'DELETE', '删除角色', NULL, NULL, NULL, NULL, 'false', '3', 1, 0),
(7, 'ADD', '新建菜单', NULL, NULL, NULL, NULL, 'false', '2', 1, 0),
(8, 'EDIT', '编辑菜单', NULL, NULL, NULL, NULL, 'false', '2', 1, 0),
(9, 'users', '用户管理', '/system/users', '/views/system/users/index', NULL, NULL, 'false', '1', 0, 0),
(10, 'department', '部门管理', '/system/department', '/views/system/department/index', NULL, NULL, 'false', '1', 0, 0),
(11, 'logs', '系统日志', '/system/logs', '/views/system/logs/index', NULL, NULL, 'false', '1', 0, 0),
(12, 'work', '办公管理', '/work', '/views/components/Layout', NULL, NULL, 'false', '0', 0, 0),
(13, 'notice', '通知公告', '/work/notice', '/views/work/notice/index', NULL, NULL, 'false', '12', 0, 0);

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role_code` varchar(255) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `role_desc` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`id`, `role_code`, `role_name`, `role_desc`, `status`) VALUES
(1, 'admin', '超级管理员', '系统默认的管理员，顶级权限', -1),
(2, 'editor', '平台管理员', '平台顶级管理员，由系统管理员创建', 0);

-- --------------------------------------------------------

--
-- 表的结构 `role_menu`
--

CREATE TABLE `role_menu` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `role_menu`
--

INSERT INTO `role_menu` (`id`, `role_id`, `menu_id`) VALUES
(11, 2, 1),
(12, 2, 2),
(13, 2, 3),
(14, 2, 4),
(15, 2, 9),
(16, 2, 10),
(17, 2, 11),
(18, 2, 12),
(19, 2, 13);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `realname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `introduction` text,
  `status` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `realname`, `email`, `phone`, `avatar`, `introduction`, `status`) VALUES
(1, 'm1', '123456', 'supAdmin', NULL, NULL, NULL, NULL, 0),
(2, 'm2', '123456', 'EdtAdmin', NULL, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- 表的结构 `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `user_role`
--

INSERT INTO `user_role` (`id`, `user_id`, `role_id`) VALUES
(1, 1, 1),
(2, 2, 2);

--
-- 转储表的索引
--

--
-- 表的索引 `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `role_menu`
--
ALTER TABLE `role_menu`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用表AUTO_INCREMENT `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `role_menu`
--
ALTER TABLE `role_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
