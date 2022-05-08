import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fd3689a6930688",
    pass: "710974506cdbcc",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedwig <oi@feedwig.com>",
      to: "Matheus Honório <matheus0honorio@gmail.com>",
      subject,
      html: body,
    });
  }
}
