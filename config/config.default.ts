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
      accessKeyId: 'xxx',
      accessKeySecret: 'xxx',
      bucket: 'xxx',
      endpoint: 'xxx',
      timeout: '60s',
    },
    useAgent: true,
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'xxx',
      // port
      port: '3306',
      // username
      user: 'xxx',
      // password
      password: 'xxx',
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
