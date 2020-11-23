const Koa = require('koa')
const koajwt = require('koa-jwt')
const koabody = require('koa-body');
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors');


const util = require('./utils')

const _config_ = require('./config');

const app = new Koa()

// 使用koa-cors
app.use(cors());

// 使用koa-body
app.use(koabody({
  multipart: true, // 支持文件上传
  formidable: {
    maxFieldsSize: 2 * 1024 * 1024, // 最大文件为2兆
    multipart: true // 是否支持 multipart-formdate 的表单
  }
}));

// 中间件对 token 进行验证
app.use((ctx, next) => {
  return next().catch((err) => {
    // 不满足条件，让用户重新登录
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        message: err.message
      }
    } else {
      throw err;
    }
  })
});

// 过滤不需要验证的接口 目前只有登录接口不需要验证
app.use(koajwt({ secret: _config_.SECRET }).unless({
  path: [/^\/api\/user\/login/,/^\/api\/uploadFile/,/^\/api\/public/]
}));

const index = require('./routes/index')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
