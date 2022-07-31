import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1659199055180_2712';

  // add your egg config in here
  config.middleware = [];

  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      ignoreJSON: true,
    },
  };
  config.oss = {
    client: {
      accessKeyId: 'LTAI5t6BkQW4RpAnZTuAejxu',
      accessKeySecret: 'EUuBTKYGISJ82JyGIfttvDhFTLuZT1',
      bucket: 'tracys',
      endpoint: 'oss-cn-chengdu.aliyuncs.com',
      timeout: '60s',
    },
    useAgent: true,
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'rm-2vc54209qpg86m3g42o.mysql.cn-chengdu.rds.aliyuncs.com',
      // port
      port: '3306',
      // username
      user: 'maixiaojie',
      // password
      password: 'maixiaojie@123',
      // database
      database: 'lowcode',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.view = {
    mapping: {
      '.nj': 'nunjucks',
    },
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
  }
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
