import { Controller } from 'egg';

export default class SchemaController extends Controller {
    public async list() {
        const { ctx } = this;
        const result = await ctx.service.page.list();
        return ctx.body = {
            code: 0,
            data: result,
            message: '获取成功'
        }
    }
    public async create() {
        const { ctx } = this;
        const { page, page_name, schema_url } = ctx.request.body;
        const result = await ctx.service.page.create({
            page,
            page_name,
            schema_url,
        });
        console.log(result);
        return ctx.body = {
            code: 0,
            data: result,
            message: '新增成功'
        }
    }
}
