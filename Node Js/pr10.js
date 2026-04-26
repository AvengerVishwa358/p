Aim: Create Node mailer module and ready to send mail on the server. 

var nodemailer require('nodemailer');

var transporter nodemailer.createTransport({

    service: 'gmail',

    auth: {

        user: 'vishwajitkhade67@gmail.com',

        pass: abcd123@gmail.com

    }

});

var mailoptions = {

    from: 'vishwajitkhade67@gmail.com',

    to: vniwalkar12@gmail.com,
    subject: 'Sending Email using Node.js',
    text: "This is the main I have sent to you using NodeMailer Module server."

};
transporter.sendMail (mailoptions,

  function(error, info) { if (error) {

    console.log(error);

  } else {
        console.log('Email sent: + info.response);

  }

});
