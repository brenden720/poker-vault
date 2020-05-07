const mysql = require('mysql');
const async = require('async');

const state = {
  pool: null,
};

exports.connect = done => {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'pokervault',
    password: 'pokervault',
    database: 'PokerVault',
  });

  done();
};

exports.get = () => state.pool;

exports.fixtures = (data, done) => {
  const { pool } = state;
  if (!pool) return done(new Error('Missing database connection'));

  var names = Object.keys(data.tables);
  async.each(
    names,
    function (name, cb) {
      async.each(
        data.tables[name],
        function (row, cb) {
          var keys = Object.keys(row),
            values = keys.map(function (key) {
              return "'" + row[key] + "'";
            });

          pool.query(
            'INSERT INTO ' +
              name +
              ' (' +
              keys.join(',') +
              ') VALUES (' +
              values.join(',') +
              ')',
            cb,
          );
        },
        cb,
      );
    },
    done,
  );
};

exports.drop = function (tables, done) {
  var pool = state.pool;
  if (!pool) return done(new Error('Missing database connection.'));

  async.each(
    tables,
    function (name, cb) {
      pool.query('DELETE * FROM ' + name, cb);
    },
    done,
  );
};
