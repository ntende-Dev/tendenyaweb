// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Subject: ${body.subject}\r\n
  Message: ${body.message}`;

  const data = {
    to: "ntende101@icloud.com",
    from: "sales@tendenya.co.za",
    subject: "New WebForm Message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  mail.send(data);
  res.status(200).json({ status: "Ok" });
};
