import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/page', controller.home.page);

  /** schema start */
  router.post('/api/v1/schema/upload', controller.schema.upload);
  /** schema end */
};

