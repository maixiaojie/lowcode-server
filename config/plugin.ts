import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  oss: {
    enable: true,
    package: 'egg-oss',
  },
};

export default plugin;
