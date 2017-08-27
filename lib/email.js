"use strict";
var nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');

module.exports.sendMail = function ({ from, to, subject, body }) {
  return new Promise((resolve, reject) => {
    // var mailHostConfig = {
    //   host: 'mail.gcalls.co',
    //   port: 587,
    //   auth: {
    //     user: 'mailservice@gcalls.co',
    //     pass: 'mailservice@Gcall2016,.'
    //   }
    // };
    var mailHostConfig = {
      service: "Gmail",
      auth: {
        user: "gadsbin@gmail.com",
        pass: "bvug12345"
      }
    };
    if (!validateEmail(to)) {
      reject(new Error('invalid mail format'));
      return;
    }
    // var smtp = nodemailer.createTransport("SMTP", mailHostConfig);
    var smtp = nodemailer.createTransport('smtps://gadsbin@gmail.com:bvug12345@smtp.gmail.com');
    var mailOption = {
      from: "Company GadsBin <gadsbin@gmail.com>",
      to,
      subject,
      generateTextFromHTML: true,
      html: "<img style='width: 300px' src='https://handout.gcall.vn/static/images/reply.png' />"
    };
    smtp.sendMail(mailOption, (error, response) => {
      if (error) {console.log(error);
        reject(error);
      } else {console.log(response);
        resolve(response);
      }
    });
    smtp.close();
  });
};

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};