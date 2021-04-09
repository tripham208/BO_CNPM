var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tripham059@gmail.com',
    pass: 'tripham208'
  }
});

var mailOptions = {
  from: 'tripham059@gmail.com',
  to: 'phamminhtri208@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

transporter.verify(function(error, success) {
  // Nếu có lỗi.
  if (error) {
      console.log(error);
  } else { //Nếu thành công.
      console.log('Kết nối thành công!');
  }
});