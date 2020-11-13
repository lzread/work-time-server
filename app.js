const Koa = require('koa')
const koajwt = require('koa-jwt')
const koabody = require('koa-body');
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors');

const SECRET = 'token';

const app = new Koa()

// 使用koa-cors
app.use(cors());
// // 使用koa-body
// app.use(koabody());


// // 中间件对 token 进行验证

// app.use(async (ctx, next) => {
//   return next().catch((err) => {
//     if (err.status === 401) {
//       ctx.status = 401;
//       ctx.body = {
//         code: 401,
//         msg: err.message
//       }
//     } else {
//       throw err;
//     }
//   })
// });


// // 过滤不需要验证的接口 目前只有登录接口不需要验证

// app.use(koajwt({ secret: SECRET }).unless({
//   path: [/^\/api\/user\/login/]
// }));


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
