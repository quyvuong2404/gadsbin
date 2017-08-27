"use strict";
var { sendMail } = require('../lib/email');

module.exports = function(app){
  app.router('/signup')
    .post((req, res) => {
      var { email, company, name, phone, message, location } = req.body;
      sendMail({
        to: email,
        subject: "",
        body: ""
      });
      rer.json({
        success: true
      });
    });
}