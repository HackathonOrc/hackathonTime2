const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'twork.noresponse@gmail.com',
    pass: 'twork123'
  }
});

export const mailOptions = (email: string, token: string, template: (token: string) => string) => {

  return {

    from: 'twork.noresponse@gmail.com',
    to: email,
    subject: 'Recuperação de senha',
    html: template(token)

  }
};
