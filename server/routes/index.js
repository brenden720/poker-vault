const express = require('express');
const db = require('../db');

const router = express.Router();

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

module.exports = router;
