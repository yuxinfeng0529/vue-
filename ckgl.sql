/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : ckgl

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 20/12/2023 08:52:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ding
-- ----------------------------
DROP TABLE IF EXISTS `ding`;
CREATE TABLE `ding`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NULL DEFAULT NULL,
  `rootName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `payment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `vehicle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expand` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4753 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ding
-- ----------------------------
INSERT INTO `ding` VALUES (4752, '2023-12-18', '李四', '未配送', '未支付', '李四', '123456789', '地球', '半挂', 'false');
INSERT INTO `ding` VALUES (4751, '2023-12-18', '张三', '未配送', '未支付', '张三', '123456789', '地球', '半挂', 'false');

-- ----------------------------
-- Table structure for dingid
-- ----------------------------
DROP TABLE IF EXISTS `dingid`;
CREATE TABLE `dingid`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `warehouse` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `quantity` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `dingid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 198 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dingid
-- ----------------------------
INSERT INTO `dingid` VALUES (194, '冻鲤鱼', '仓库一', '2023-12-18', '1', '条', '已确认', 4751);
INSERT INTO `dingid` VALUES (195, '苹果', '仓库四', '2023-12-18', '1', '箱', '已确认', 4751);
INSERT INTO `dingid` VALUES (196, '香蕉', '仓库四', '2023-12-18', '1', '箱', '已确认', 4752);
INSERT INTO `dingid` VALUES (197, '红木沙发', '仓库三', '2023-12-18', '1', '张', '已确认', 4752);

-- ----------------------------
-- Table structure for kkkku
-- ----------------------------
DROP TABLE IF EXISTS `kkkku`;
CREATE TABLE `kkkku`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` date NULL DEFAULT NULL,
  `quantity` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `name`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kkkku
-- ----------------------------
INSERT INTO `kkkku` VALUES (1, '苹果', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (2, '香蕉', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (3, '菠萝', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (4, '草莓', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (5, '甘蔗', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (6, '猕猴桃', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (7, '榴莲', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (8, '西瓜', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (9, '南瓜', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (10, '冬瓜', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (11, '白菜', '2023-11-27', '100', '个');
INSERT INTO `kkkku` VALUES (12, '青菜', '2023-11-27', '100', '个');

-- ----------------------------
-- Table structure for kkku
-- ----------------------------
DROP TABLE IF EXISTS `kkku`;
CREATE TABLE `kkku`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `quantity` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kkku
-- ----------------------------
INSERT INTO `kkku` VALUES (1, '红木家具两件套', '2023-11-27', '100', '套');
INSERT INTO `kkku` VALUES (2, '红木椅子', '2023-11-27', '100', '张');
INSERT INTO `kkku` VALUES (3, '红木桌子', '2023-11-27', '100', '张');
INSERT INTO `kkku` VALUES (4, '红木沙发', '2023-11-27', '100', '张');
INSERT INTO `kkku` VALUES (5, '砖块', '2023-11-27', '100', '块');
INSERT INTO `kkku` VALUES (6, '玻璃', '2023-11-27', '100', '块');
INSERT INTO `kkku` VALUES (7, '人头', '2023-11-27', '100', '个');

-- ----------------------------
-- Table structure for kku
-- ----------------------------
DROP TABLE IF EXISTS `kku`;
CREATE TABLE `kku`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `quantity` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kku
-- ----------------------------
INSERT INTO `kku` VALUES (1, '红木', '2023-11-27', '100', '根');
INSERT INTO `kku` VALUES (2, '章木', '2023-11-27', '100', '根');
INSERT INTO `kku` VALUES (3, '大理石', '2023-11-27', '100', '快');
INSERT INTO `kku` VALUES (4, '黑曜石', '2023-11-27', '100', '快');
INSERT INTO `kku` VALUES (5, '金刚石', '2023-11-27', '100', '快');
INSERT INTO `kku` VALUES (6, '黄金', '2023-11-27', '100', '快');
INSERT INTO `kku` VALUES (7, '白银', '2023-11-27', '100', '快');
INSERT INTO `kku` VALUES (8, '铁', '2023-11-27', '100', '快');

-- ----------------------------
-- Table structure for ku
-- ----------------------------
DROP TABLE IF EXISTS `ku`;
CREATE TABLE `ku`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `quantity` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ku
-- ----------------------------
INSERT INTO `ku` VALUES (1, '冻鲤鱼', '2023-11-27', '400', '条');
INSERT INTO `ku` VALUES (2, '冻鲨鱼', '2023-11-27', '100', '条');
INSERT INTO `ku` VALUES (3, '冻章鱼', '2023-11-27', '100', '条');
INSERT INTO `ku` VALUES (4, '冻冰激凌', '2023-11-27', '100', '箱');
INSERT INTO `ku` VALUES (5, '冻雪糕', '2023-11-27', '100', '箱');
INSERT INTO `ku` VALUES (6, '冻三色雪糕', '2023-11-27', '100', '箱');
INSERT INTO `ku` VALUES (7, '冻海盗船', '2023-11-27', '100', '艘');

-- ----------------------------
-- Table structure for kuku
-- ----------------------------
DROP TABLE IF EXISTS `kuku`;
CREATE TABLE `kuku`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `remarks` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `rootname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `rootphone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kuku
-- ----------------------------
INSERT INTO `kuku` VALUES (1, '仓库一', '南滨大道', '冷冻仓库', '张三', '123456');
INSERT INTO `kuku` VALUES (2, '仓库二', '南滨大道', '普通仓库', '李四', '123456');
INSERT INTO `kuku` VALUES (3, '仓库三', '南滨大道', '家具仓库', '王五', '123456');
INSERT INTO `kuku` VALUES (4, '仓库四', '南滨大道', '保鲜仓库', '赵六', '123456');

-- ----------------------------
-- Table structure for root
-- ----------------------------
DROP TABLE IF EXISTS `root`;
CREATE TABLE `root`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of root
-- ----------------------------
INSERT INTO `root` VALUES (1, 'admin', 'admin');
INSERT INTO `root` VALUES (2, 'admin', '123456');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 108 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '2023-11-27', '张三', '男', '20', '123456', '福建');
INSERT INTO `user` VALUES (2, '2023-11-27', '李四', '男', '20', '123456', '福建');
INSERT INTO `user` VALUES (3, '2023-11-27', '王五', '男', '20', '123456', '福建');

SET FOREIGN_KEY_CHECKS = 1;
