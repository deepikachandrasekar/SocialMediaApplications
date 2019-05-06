const Base = require('./base');
const ApiController = require('../controllers/api');

class General extends Base {
  constructor() {
    super();
    this.get('/health', ApiController.healthCheck);
    this.post('/timetable', ApiController.timetable);
    this.post('/login', ApiController.login);
    this.post('/modules', ApiController.modules);
  }
}

module.exports = General;