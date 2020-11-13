-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-11-12 16:53:02
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
-- 表的结构 `dept`
--

CREATE TABLE `dept` (
  `id` int(11) NOT NULL,
  `dept_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `job`
--

CREATE TABLE `job` (
  `id` int(11) NOT NULL,
  `job_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `component` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `redirect` varchar(255) DEFAULT NULL,
  `hidden` varchar(255) DEFAULT 'false',
  `parent_id` varchar(255) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `menu`
--

INSERT INTO `menu` (`id`, `name`, `title`, `path`, `component`, `icon`, `redirect`, `hidden`, `parent_id`) VALUES
(1, 'workflow', '工作流程', '/workflow', '/views/components/Layout', NULL, '', 'false', '0'),
(2, 'system', '系统设置', '/system', '/views/components/Layout', NULL, NULL, 'false', '0'),
(3, 'workflowList', '我的流程', '/workflow/list', '/views/workflow/list', NULL, NULL, 'false', '1'),
(4, 'workflowSettings', '功能设置', '/workflow/settings/index', '/views/workflow/settings/index', NULL, NULL, 'false', '1'),
(5, 'workflowCategory', '流程分类', '/workflow/settings/category', '/views/workflow/settings/category', NULL, NULL, 'false', '4'),
(6, 'workflowTemplate', '流程模板', '/workflow/settings/template', '/views/workflow/settings/template', NULL, NULL, 'false', '4'),
(7, 'workflowForms', '流程表单', '/workflow/forms', '/views/workflow/forms/index', NULL, NULL, 'false', '1'),
(8, 'workflowFormList', '我的表单', '/workflow/forms', '/views/workflow/forms/index', NULL, NULL, 'false', '7'),
(9, 'menus', '菜单管理', '/system/menus', '/views/system/menus', NULL, NULL, 'false', '2'),
(10, 'roles', '角色管理', '/system/roles', '/views/system/roles', NULL, NULL, 'false', '2');

-- --------------------------------------------------------

--
-- 表的结构 `power`
--

CREATE TABLE `power` (
  `id` int(11) NOT NULL,
  `power_name` varchar(255) NOT NULL,
  `power_code` varchar(255) NOT NULL,
  `power_desc` text,
  `power_type` int(11) NOT NULL DEFAULT '0',
  `menu_id` int(11) NOT NULL,
  `status` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `power`
--

INSERT INTO `power` (`id`, `power_name`, `power_code`, `power_desc`, `power_type`, `menu_id`, `status`) VALUES
(1, '新建', 'ADD', NULL, 0, 3, 0),
(2, '编辑', 'UPDATE', NULL, 0, 3, 0),
(3, '删除', 'DELETE', NULL, 0, 3, 0),
(4, '新建', 'ADD', NULL, 0, 5, 0),
(5, '编辑', 'UPDATE', NULL, 0, 5, 0),
(6, '删除', 'DELETE', NULL, 0, 5, 0),
(7, '新建', 'ADD', NULL, 0, 6, 0),
(8, '编辑', 'UPDATE', NULL, 0, 6, 0),
(9, '删除', 'DELETE', NULL, 0, 6, 0),
(10, '新建', 'ADD', NULL, 0, 8, 0),
(11, '编辑', 'UPDATE', NULL, 0, 8, 0),
(12, '删除', 'DELETE', NULL, 0, 8, 0);

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
(1, 'admin', '系统超级管理员', NULL, -1),
(2, 'system', '系统管理员', NULL, -1),
(3, 'editor', '系统编辑者', NULL, 0),
(4, 'content', '系统内容编辑者', NULL, 0);

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
(1, 3, 1),
(2, 3, 2),
(3, 3, 3),
(4, 3, 4),
(5, 3, 5),
(6, 3, 6),
(7, 4, 1);

-- --------------------------------------------------------

--
-- 表的结构 `role_power`
--

CREATE TABLE `role_power` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `power_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `role_power`
--

INSERT INTO `role_power` (`id`, `role_id`, `power_id`) VALUES
(21, 3, 9),
(44, 3, 1),
(45, 3, 2),
(46, 3, 3);

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
(1, 'm1', '123456', NULL, NULL, NULL, NULL, NULL, 0),
(2, 'm2', '123456', NULL, NULL, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- 表的结构 `user_dept`
--

CREATE TABLE `user_dept` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `user_job`
--

CREATE TABLE `user_job` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(2, 2, 3),
(12, 1, 7),
(13, 2, 7),
(14, 3, 7);

--
-- 转储表的索引
--

--
-- 表的索引 `dept`
--
ALTER TABLE `dept`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `power`
--
ALTER TABLE `power`
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
-- 表的索引 `role_power`
--
ALTER TABLE `role_power`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user_dept`
--
ALTER TABLE `user_dept`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user_job`
--
ALTER TABLE `user_job`
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
-- 使用表AUTO_INCREMENT `dept`
--
ALTER TABLE `dept`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `job`
--
ALTER TABLE `job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用表AUTO_INCREMENT `power`
--
ALTER TABLE `power`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用表AUTO_INCREMENT `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `role_menu`
--
ALTER TABLE `role_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `role_power`
--
ALTER TABLE `role_power`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `user_dept`
--
ALTER TABLE `user_dept`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `user_job`
--
ALTER TABLE `user_job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
