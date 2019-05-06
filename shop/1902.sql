# Host: localhost  (Version: 5.0.45-community-nt)
# Date: 2019-05-06 09:59:21
# Generator: MySQL-Front 5.3  (Build 4.43)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "shop"
#

DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL auto_increment,
  `name` text,
  `price` float default NULL,
  `num` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Data for table "shop"
#

INSERT INTO `shop` VALUES (4,'1',1,1),(5,'1',1,1),(7,'j',1,-1);

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` text,
  `password` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

INSERT INTO `user` VALUES ('',NULL),('',NULL),('',NULL),('',NULL),('',NULL),('',NULL),('',NULL),('',NULL),('',NULL),('',NULL),('qq','123');
