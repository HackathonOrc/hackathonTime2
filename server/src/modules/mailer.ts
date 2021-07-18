const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "twork.noresponse@gmail.com",
    pass: "twork123",
  },
});

export const mailOptions = (
  subject: string,
  email: string,
  token: string,
  userName: string,
  template: (token: string, userName: string) => string
) => {
  return {
    from: "twork.noresponse@gmail.com",
    to: email,
    subject: subject,
    html: template(token, userName),
  };
};
