const fs = require('fs')
const path = require('path')
const util = require('./index')
class UploadController {

    static async uploadFile(ctx) {
        const file = ctx.request.files.file;

        try {

            const reader = fs.createReadStream(file.path);

            var fileName = util.getUploadDirName() + '.' + util.getUploadFileExt(file.name);

            let filePath = path.join(__dirname, 'public/upload/') + fileName;

            let url = fileName;

            reader.pipe(fs.createWriteStream(filePath));


            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: '成功',
                url
            }
        } catch (error) {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                message: '失败',
            }
        }

    }




}
module.exports = UploadController