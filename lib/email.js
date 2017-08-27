"use strict";
var nodemailer = require('nodemailer');

module.exports.sendMail = function ({ from, to, subject, body }) {
  return new Promise((resolve, reject) => {
    if (!to) {
      reject(new Error('invalid mail receiver'));
      return;
    }
    if (!subject) {
      reject(new Error('invalid mail subject'));
      return;
    }
    if (!body) {
      reject(new Error('invalid mail content'));
      return;
    }
    var mailHostConfig = {
      host: 'mail.gcalls.co',
      port: 587,
      auth: {
        user: 'mailservice@gcalls.co',
        pass: 'mailservice@Gcall2016,.'
      }
    };
    if (!validateEmail(email)) {
      reject(new Error('invalid mail format'));
      return;
    }
    var smtp = nodemailer.createTransport(mailHostConfig);
    var mailOption = {
      from: !!from ? from : "mailservice@gcalls.co",
      to,
      subject,
      generateTextFromHTML: true,
      html: body
    };
    smtp.sendMail(mailOption, (error, response) => {
      if (error) {
        reject(error);
      } else {
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