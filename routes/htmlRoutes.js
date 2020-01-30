var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Track.findAll({}).then(function (data) {
      // console.log(data)
      // res.json(data)

      res.render("index", {
        msg: "untitled music app",
        tracks: data
      });
    });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/track/:id", function (req, res) {
    db.Track.findOne({ where: { id: req.params.id } }).then(function (data) {
      track = { id: data.id, title: data.title, description: data.description, instrument: data.instrument, length: data.length, genre: data.genre, bpm: data.bpm, key_signature: data.key_signature, time_signature: data.time_signature, sound_file: data.sound_file }
      // res.json(track);
      res.render("track", track);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
