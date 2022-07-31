import { Controller } from 'egg';
import { default as toStream } from 'string-to-stream';

export default class SchemaController extends Controller {
    public async upload() {
        const { ctx } = this;
        const { page, schema } = ctx.request.body;
        const filename = `/schema/${page}.json`;
        const result = await ctx.oss.putStream(filename, toStream(JSON.stringify(schema)));
        if (result && result.url) {
            return ctx.body = {
                code: 0,
                data: {
                    url: result.url,
                },
                message: '上传成功'
            }
        }
        return ctx.body = {
            code: 1,
            data: {
            },
            message: '上传失败'
        }
    }
}
