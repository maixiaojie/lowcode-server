// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportPage from '../../../app/controller/page';
import ExportSchema from '../../../app/controller/schema';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    page: ExportPage;
    schema: ExportSchema;
  }
}
