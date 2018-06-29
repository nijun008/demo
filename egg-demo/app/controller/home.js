const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    let str = await this.ctx.service.user.myStr('hello')
    this.ctx.body = str
  }
}

module.exports = HomeController