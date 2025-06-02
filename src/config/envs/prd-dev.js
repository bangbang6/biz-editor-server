const devConf = require("./dev");
Object.assign(devConf.redisConf, {
  host: "editor-redis", //host改为docker容器
});
Object.assign(devConf.mysqlConf, {
  host: "editor-mysql", //host改为docker容器
});
Object.assign(devConf.mongodbConf, {
  host: "editor-mongo", //host改为docker容器
});
module.exports = devConf;
