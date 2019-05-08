const Base = require('./base');
const ApiRouter = require('./api');
/** ******
Base Route Class
******* */

class Routes extends Base {
  constructor() {
    super();
    this.use('/', new ApiRouter());
  }
}

module.exports = Routes;