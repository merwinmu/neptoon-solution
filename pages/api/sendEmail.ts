import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from "../../lib/email"

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {

  const { subject, description, email, name } = req.body;

  await sendEmail({
    to: "admin@neptoon.com",
    subject: "Webseite anfrage",
    html: `<p>You have a contact form submission from ${name}</p><br>
    <p><strong>Email: </strong> ${email}</p><br>
    <p><strong>Message: </strong> ${description}</p><br>`
  })
  
}
  