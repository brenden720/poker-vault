const mysql = require('mysql');
// const async = require('async');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'pokervault',
  password: 'pokervault',
  database: 'PokerVault',
  port: '3306',
});

let pokervaultdb = {};

// For GET requests

pokervaultdb.getSessions = (sessionType, userId) => {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT id FROM ${sessionType} WHERE user_id = ${userId}`;
    pool.query(queryString, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

pokervaultdb.getSession = (sessionType, userId, sessionId) => {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * FROM ${sessionType} WHERE user_id = ${userId} && id = ${sessionId}`;
    pool.query(queryString, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results[0]);
    });
  });
};

pokervaultdb.getSettings = (settingType, userId) => {
  return new Promise((resolve, reject) => {
    let column = settingType.substring(0, settingType.length - 1);
    let userSettingType = `user_${settingType}`;
    let id1 = `${settingType}.id`;
    let id2 = `${userSettingType}.${column}_id`;
    let user = `${userSettingType}.user_id`;
    let queryString = `SELECT ${column} FROM ${settingType} JOIN ${userSettingType} ON ${id1} = ${id2} WHERE ${user} = ${userId}`;

    pool.query(queryString, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

pokervaultdb.getResults = (resultType, userId) => {
  return new Promise((resolve, reject) => {
    let column = resultType;
    let queryString = `SELECT * FROM ${column}
      WHERE user_id= ${userId}`;

    pool.query(queryString, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = pokervaultdb;

// const state = {
//   pool: null,
// };

// exports.connect = done => {
//   state.pool = mysql.createPool({
//     host: 'localhost',
//     user: 'pokervault',
//     password: 'pokervault',
//     database: 'PokerVault',
//   });

//   done();
// };

// exports.get = () => state.pool;

// exports.fixtures = (data, done) => {
//   const { pool } = state;
//   if (!pool) return done(new Error('Missing database connection'));

//   var names = Object.keys(data.tables);
//   async.each(
//     names,
//     function (name, cb) {
//       async.each(
//         data.tables[name],
//         function (row, cb) {
//           var keys = Object.keys(row),
//             values = keys.map(function (key) {
//               return "'" + row[key] + "'";
//             });

//           pool.query(
//             'INSERT INTO ' +
//               name +
//               ' (' +
//               keys.join(',') +
//               ') VALUES (' +
//               values.join(',') +
//               ')',
//             cb,
//           );
//         },
//         cb,
//       );
//     },
//     done,
//   );
// };

// exports.drop = function (tables, done) {
//   var pool = state.pool;
//   if (!pool) return done(new Error('Missing database connection.'));

//   async.each(
//     tables,
//     function (name, cb) {
//       pool.query('DELETE * FROM ' + name, cb);
//     },
//     done,
//   );
// };
