import { Service } from 'egg';

/**
 * Test Service
 */
export default class Page extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async list() {
    const { ctx } = this;
    const result = await ctx.app.mysql.select('lowcode_page', {
      limit: 10,
      offset: 0
    });
    return result;
  }
  public async create(obj) {
    const { ctx } = this;
    const { page, page_name, schema_url, } = obj;
    const result = await ctx.app.mysql.insert('lowcode_page', {
      page,
      page_name,
      schema_url,
      creator: 'tracy',
      create_at: new Date(),
      update_at: new Date(),
    })
    return result;
  }
}
