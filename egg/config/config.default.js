/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {
      csrf: {
        enable: false
      },
      domainWhiteList: ['http://localhost:8080'],
    },
    cors: {
      origin: '*',
      credentials: true,
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1700813740469_1294';

  // add your middleware config here
  config.middleware = ['resHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置MySql
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',  // MySQL 容器的 IP 地址
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'ckgl',  // 你的数据库名称
    define: {
      timestamps: false,
      freezeTableName: true,
      connectTimeout: 60000,
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
