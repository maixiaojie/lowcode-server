import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('index.nj');
  }

  public async page() {
    const { ctx } = this;
    await ctx.render('preview.nj');
  }
}
