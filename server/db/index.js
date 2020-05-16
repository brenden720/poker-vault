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

const pokervaultdb = {};

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

pokervaultdb.getSetting = (settingType, userId) => {
  return new Promise((resolve, reject) => {
    const column = settingType.substring(0, settingType.length - 1);
    const userSettingType = `user_${settingType}`;
    const id1 = `${settingType}.id`;
    const id2 = `${userSettingType}.${column}_id`;
    const user = `${userSettingType}.user_id`;
    const queryString = `SELECT ${column} FROM ${settingType} JOIN ${userSettingType} ON ${id1} = ${id2} WHERE ${user} = ${userId}`;

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
    const column = resultType;
    const queryString = `SELECT * FROM ${column}
      WHERE user_id= ${userId}`;

    pool.query(queryString, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

// For POST requests

pokervaultdb.addSetting = (settingType, userId, newSetting) => {
  return new Promise((resolve, reject) => {
    const column = settingType.substring(0, settingType.length - 1);
    const settingTypeId = `${column}_id`;
    const combinedTable = `user_${settingType}`;
    const value = Object.values(newSetting)[0];
    const queryOne = `INSERT IGNORE INTO ${settingType} (${column}) VALUES ('${value}')`;
    const queryTwo = `INSERT IGNORE INTO ${combinedTable} (user_id, ${settingTypeId}) VALUES (${userId}, last_insert_id())`;
    const backupQueryOne = `SELECT id FROM ${settingType} WHERE ${column} = '${value}'`;

    pool.getConnection((err, conn) => {
      conn.beginTransaction(err => {
        if (err) throw err;
        conn.query(queryOne, (error, results, fields) => {
          if (error) {
            return conn.rollback(() => {
              throw error;
            });
          }

          if (results.insertId > 0) {
            conn.query(queryTwo, (error, results, fields) => {
              if (error) {
                return conn.rollback(() => {
                  throw error;
                });
              }
              conn.commit(err => {
                if (err) {
                  return conn.rollback(() => {
                    throw err;
                  });
                }
                return resolve(results);
              });
            });
          } else {
            conn.query(backupQueryOne, (error, results, fields) => {
              if (error) {
                return conn.rollback(() => {
                  throw error;
                });
              }
              const backupQueryTwo = `INSERT IGNORE INTO ${combinedTable} (user_id, ${settingTypeId}) VALUES (${userId}, ${results[0].id})`;

              conn.query(backupQueryTwo, (error, results, fields) => {
                if (error) {
                  return conn.rollback(() => {
                    throw error;
                  });
                }
                conn.commit(err => {
                  if (err) {
                    return conn.rollback(() => {
                      throw err;
                    });
                  }
                  return resolve(results);
                });
              });
            });
          }
        });
      });
    });
  });
};

pokervaultdb.addCashSession = (userId, newSession) => {
  newSession.start_time = new Date(newSession.start_time)
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
  newSession.end_time = new Date(newSession.end_time)
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');

  console.log('start time: ', newSession.start_time);
  console.log('end time: ', newSession.end_time);

  const sessionData = [
    newSession.game,
    newSession.stake,
    newSession.limit_type,
    newSession.location,
    newSession.location_type,
    newSession.start_time,
    newSession.end_time,
    newSession.buy_in,
    newSession.cashed_out,
    newSession.tips,
    newSession.notes,
    userId,
  ];

  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO cash_sessions (game, stake, limit_type, location, location_type, start_time, end_time, buy_in, cashed_out, tips, notes, user_id) VALUES (?)`,
      [sessionData],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      },
    );
  });
};

pokervaultdb.checkUser = userId => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT count(*) AS total FROM users WHERE id = ?`,
      userId,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      },
    );
  });
};

pokervaultdb.addUser = userId => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO users (id, first_name, last_name, email) VALUES (?, ?, ?, ?)`,
      userId,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      },
    );
  });
};

pokervaultdb.deleteSetting = (tableName, userId, setting) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      conn.beginTransaction(err => {
        if (err) throw err;

        const column = tableName.substring(0, tableName.length - 1);
        const fetchIdQuery = `SELECT id from ${tableName} WHERE ${column}='${setting}'`;

        conn.query(fetchIdQuery, (error, results, fields) => {
          if (error) {
            return conn.rollback(() => {
              throw error;
            });
          }

          const deleteQuery = `DELETE FROM user_${tableName} WHERE user_id = ${userId} AND ${column}_id = ${results[0].id}`;

          conn.query(deleteQuery, (error, results, fields) => {
            if (error) {
              return conn.rollback(() => {
                throw error;
              });
            }
            conn.commit(err => {
              if (err) {
                return conn.rollback(() => {
                  throw err;
                });
              }
              return resolve(results);
            });
          });
        });
      });
    });
  });
};

pokervaultdb.deleteSession = sessionId => {
  return new Promise((resolve, reject) => {
    pool.query(
      `DELETE FROM cash_sessions WHERE id = ?`,
      sessionId,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      },
    );
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
