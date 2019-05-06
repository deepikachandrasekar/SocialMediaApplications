const ControllerHelper = require('../../common/controllerHelper');
const mysql = require('mysql');
const mysqlConfig = require('../../config.json').mysql;

const connection = mysql.createConnection({
  host: mysqlConfig.host,
  user: mysqlConfig.username,
  password: mysqlConfig.password,
  database: mysqlConfig.database
});

class Api {
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

  static async login(req, res) {
    const controllerHelper = new ControllerHelper(res);
    try {
      var result = []
      connection.query(`SELECT student.student_id, student.name as student_name  ,student.email,course.course_id,course.name  as course_name FROM student INNER  JOIN course  ON course.course_id = student.course_id where student.email='${req.body.email}' and student.password = AES_ENCRYPT('${req.body.password}','key_tud_password_encrypt');`, function (error, results, fields) {
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


  static async modules(req, res) {
    const controllerHelper = new ControllerHelper(res);
    try {
      var result = []
      connection.query(`SELECT module_id,name,credits,website,due_date  FROM module WHERE  module.course_id like '%${req.body.courseId}%';`, function (error, results, fields) {
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
              due_date: value.due_date
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