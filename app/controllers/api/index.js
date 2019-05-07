const ControllerHelper = require('../../common/controllerHelper');
const mysql = require('mysql');
const mysqlConfig = require('../../config.json').mysql;

  /** ******
  SQL Connection
  ******* */
const connection = mysql.createConnection({
  host: mysqlConfig.host,
  port:mysqlConfig.port,
  user: mysqlConfig.username,
  password: mysqlConfig.password,
  database: mysqlConfig.database
});

class Api {
   /** ******
  Health Check API to test the API health
  GET Method
  ******* */
  static async healthCheck(req, res) {
    const controllerHelper = new ControllerHelper(res);
    try {
      controllerHelper.sendResponse({
        code: 200,
        result: {
          result: "healthy"
        }
      });
    } catch (err) {
      controllerHelper.sendErrorResponse({
        message: err,
      });
    }
  }
   /** ******
  Timetable API
  POST METHOD
  Request Body
  {
	"courseId":"11101"
   }
  ******* */
  static async timetable(req, res) {
    const controllerHelper = new ControllerHelper(res);
    try {
      var result = []
      const today = new Date();
      const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
      const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
      const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
      connection.query(`SELECT module.name,module.location,module.room,module.latitude,module.longitude,time_table.day,time_table.time,${weekNumber} as week  FROM module  JOIN time_table ON time_table.module_id = module.module_id WHERE time_table.week LIKE '%,${weekNumber},%' AND module.course_id like '%${req.body.courseId}%';`, function (error, results, fields) {
        if (error) console.log(error);
        results.forEach((value, index, array) => {
          var tableVal = {
            name: value.name,
            location: value.location,
            room: value.room,
            latitude: value.latitude,
            longitude: value.longitude,
            day: value.day,
            time: value.time,
            week: value.week
          };
          result.push(tableVal);
          if (index === array.length - 1) {
            controllerHelper.sendResponse({
              code: 200,
              result: {
                result,
              },
            });
          }
        });
      });
    } catch (err) {
      controllerHelper.sendErrorResponse({
        message: err,
      });
    }
  }
 /** ******
  Login API
  POST METHOD
  Request Body
  {
	"email":"test@email",
  "password":"123"
   }
  ******* */
  static async login(req, res) {
    const controllerHelper = new ControllerHelper(res);
    try {
      var result = []
      connection.query(`SELECT student.student_id, student.name as student_name  ,student.email,course.course_id,course.name  as course_name,student.profile_picture FROM student INNER  JOIN course  ON course.course_id = student.course_id where student.email='${req.body.email}' and student.password = AES_ENCRYPT('${req.body.password}','key_tud_password_encrypt');`, function (error, results, fields) {
        if (error) console.log(error);
        if (results.length === 0) {
          controllerHelper.sendResponse({
            code: 200,
            result: {
              result: "Incorrect Username or password"
            }
          });
        } else {
          results.forEach((value, index, array) => {
            var tableVal = {
              student_id: value.student_id,
              name: value.student_name,
              email: value.email,
              profile_picture: value.profile_picture,
              course_name: value.course_name,
              course_id: value.course_id
            };
            result.push(tableVal);
            if (index === array.length - 1) {
              controllerHelper.sendResponse({
                code: 200,
                result: {
                  result,
                },
              });
            }
          });
        }
      });
    } catch (err) {
      controllerHelper.sendErrorResponse({
        message: err,
      });
    }
  }
  /** ******
  To get profile picture during the login page  API
  POST METHOD
  Request Body
  {
	"email":"test@email"
   }
  ******* */
  static async getPic(req, res) {
    const controllerHelper = new ControllerHelper(res);
    try {
      var result = []
      connection.query(`SELECT  student.name, student.profile_picture FROM student where student.email='${req.body.email}'`, function (error, results, fields) {
        if (error) console.log(error);
        if (results.length === 0) {
          controllerHelper.sendResponse({
            code: 200,
            result: {
              result: "Incorrect Username or password"
            }
          });
        } else {
          results.forEach((value, index, array) => {
            var tableVal = {
              name: value.name,
              profile_picture: value.profile_picture
            };
            result.push(tableVal);
            if (index === array.length - 1) {
              controllerHelper.sendResponse({
                code: 200,
                result: {
                  result,
                },
              });
            }
          });
        }
      });
    } catch (err) {
      controllerHelper.sendErrorResponse({
        message: err,
      });
    }
  }

/** ******
  Modules API
  POST METHOD
  Request Body
  {
	"courseID":"123123"
   }
  ******* */
  static async modules(req, res) {
    const controllerHelper = new ControllerHelper(res);
    try {
      var result = []
      connection.query(`SELECT module_id,name,credits,website,due_date,location  FROM module WHERE  module.course_id like '%${req.body.courseId}%';`, function (error, results, fields) {
        if (error) console.log(error);
        if (results.length === 0) {
          controllerHelper.sendResponse({
            code: 200,
            result: {
              result: "Incorrect Module"
            }
          });
        } else {
          results.forEach((value, index, array) => {
            var tableVal = {
              module_id: value.module_id,
              name: value.name,
              credits: value.credits,
              website: value.website,
              due_date: value.due_date,
              location: value.location
            };
            result.push(tableVal);
            if (index === array.length - 1) {
              controllerHelper.sendResponse({
                code: 200,
                result: {
                  result,
                },
              });
            }
          });
        }
      });
    } catch (err) {
      controllerHelper.sendErrorResponse({
        message: err,
      });
    }
  }
}
module.exports = Api;
