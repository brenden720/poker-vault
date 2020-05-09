const express = require('express');
const db = require('../db');

const router = express.Router();

// Get all cash sessions

router.get('/cash/:userid/:sessiontype', async (req, res, next) => {
  try {
    let results = await db.getSessions(
      req.params.sessiontype,
      req.params.userid,
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// Get one cash session

router.get('/cash/:userid/:sessiontype/:sessionid', async (req, res, next) => {
  try {
    let results = await db.getSession(
      req.params.sessiontype,
      req.params.userid,
      req.params.sessionid,
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/tournament/:userid/:sessiontype', async (req, res, next) => {
  try {
    let results = await db.getSessions(
      req.params.sessiontype,
      req.params.userid,
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get(
  '/tournament/:userid/:sessiontype/:sessionid/',
  async (req, res, next) => {
    try {
      let results = await db.getSession(
        req.params.sessiontype,
        req.params.userid,
        req.params.sessionid,
      );
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  },
);

router.get('/settings/:userid/:settingtype', async (req, res, next) => {
  try {
    let results = await db.getSettings(
      req.params.settingtype,
      req.params.userid,
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/results/:userid/:resulttype', async (req, res, next) => {
  try {
    let results = await db.getResults(req.params.resulttype, req.params.userid);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// POST requests

// Add a specific setting
router.post('/settings/:userid/:settingtype', async (req, res, next) => {
  try {
    let results = await db.addSetting(
      req.params.settingtype,
      req.params.userid,
      req.body.newSetting,
    );
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// Add a new cash session
router.post('/cash/:userid', async (req, res, next) => {
  try {
    let results = await db.addCashSession(req.params.userid, req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// Add User

router.post('/user/:userid/:fullName/:email', async (req, res, next) => {
  const { userid, fullName, email } = req.params;

  if (JSON.parse(userid) === null) {
    res.sendStatus(200);
    return;
  }

  try {
    let idCheck = await db.checkUser(userid);
    let count = idCheck[0].total;

    if (count > 0) {
      return res.sendStatus(200);
    }

    const firstName = fullName
      .split(/(\s).+\s/)
      .join('')
      .split(' ')[0];
    const lastName = fullName
      .split(/(\s).+\s/)
      .join('')
      .split(' ')[1];

    await db.addUser([userid, firstName, lastName, email]);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
