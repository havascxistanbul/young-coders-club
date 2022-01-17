import nextConnect from 'next-connect';
import multer from 'multer';
import { SMTPClient } from 'emailjs';


const upload = multer({
  storage: multer.diskStorage({
    destination: 'public/uploads/',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const middleware = upload.single('files');

apiRoute.use(middleware);

apiRoute.post((req, res) => {
  sendEmail(req.body, req.file.filename)

  res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};


function sendEmail(body, filename) {
  const client = new SMTPClient({
    user: process.env.mail,
    password: process.env.password,
    host: process.env.mail_host,
    ssl: true,
  });

  client.send(
    {
      text: 'i hope this works',
      from: process.env.mail,
      to: process.env.mail,
      subject: `Application Form | ${body.name} ${body.surname} `,
      attachment: [
        {
          data: `<html>
          <div>Email => <a href="mailto:${body.email}">${body.email}</a>,</div><br>
          <div>Github => <a href="${body.github}" target=_blank>${body.name} ${body.surname}</a></div>
        </html>`, alternative: true
        },
        { path: `public/uploads/${filename}`, type: 'application/pdf', name: `${body.name}${body.surname}.pdf` },
      ],
    },
    (err, message) => {
      console.log(err || message);
    }
  );
}