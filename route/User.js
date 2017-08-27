"use strict";
var { sendMail } = require('../lib/email');

module.exports = function(app){
  app.route('/signup')
    .post((req, res) => {
      var { email, company, name, phone, message, location } = req.body;
      sendMail({
        to: email,
        subject: "Gads!Bin - Payment Information",
        body: ""
      });
      res.json({
        success: true
      });
    });
}