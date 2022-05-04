import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mailAdapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4f26ed849fe2db",
    pass: "e4f9459d11149b"
  }
});

export class NodemailerMailAdapter {
  async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Renan Ferreira <rfmuliterno@gmail.com>',
      subject: subject,
      html: body
    })
  }
}