const Koa = require('koa')
const koajwt = require('koa-jwt')
const koabody = require('koa-body');
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors');

const jwt = require('jsonwebtoken');

const util = require('./utils')

const _config_ = require('./config');

const app = new Koa()

// 使用koa-cors
app.use(cors());

// 使用koa-body
app.use(koabody());

// 中间件对 token 进行验证
app.use((ctx, next) => {

  // if (ctx.header && ctx.header.authorization) {
  //   const parts = ctx.header.authorization.split(' ');
  //   if (parts.length === 2) {
  //     //取出token
  //     const scheme = parts[0];
  //     const token = parts[1];

  //     console.log(scheme)

  //     if (/^Bearer$/i.test(scheme)) {
  //       try {
  //         //jwt.verify方法验证token是否有效
  //         jwt.verify(token, _config_.SECRET, {
  //           complete: true
  //         });
  //       } catch (error) {
  //         //token过期 生成新的token
  //         const newToken = scheme + " " + util.getToken({ username: 'm2', id: '2' });
  //         //将新token放入Authorization中返回给前端
  //         ctx.res.setHeader('Authorization', newToken);
  //         console.log(jwt.verify(util.getToken({ username: 'm2', id: '2' }), _config_.SECRET, {
  //           complete: true
  //         }))
  //       }
  //     }
  //   }
  // }

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
  path: [/^\/api\/user\/login/]
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
