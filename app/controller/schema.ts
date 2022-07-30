import { Controller } from 'egg';

export default class SchemaController extends Controller {
    public async upload() {
        const { ctx } = this;
        const { page, schema } = ctx.request.body;
        console.log(page, schema);
        return ctx.body = {
            code: 1
        }
    }
}
