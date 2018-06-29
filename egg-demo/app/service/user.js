const Service = require('egg').Service

class UserService extends Service {
  async myStr (uid) {
    return uid + ' egg.js'
  }
}

module.exports = UserService