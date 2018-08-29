var mailgun = require('../config/mailgun');
var key = mailgun.key;
var domain = mailgun.domain;
var contact = mailgun.contact;

console.log(mailgun, key, domain);

module.exports = function(sendmail) {

  function sendmail(to, subject, text, attach) {

    console.log(to, subject, text, attach);

    var mailgun = require('mailgun-js')({
      apiKey: key,
      domain: domain
    });

    var data = {
      from: 'Test User <no-reply@belcboo.com>',
      to: to,
      subject: subject,
      text: text,
      inline: attach
    };

    mailgun.messages().send(data, function(error, body) {
      console.log(body);
    });
  };

};
