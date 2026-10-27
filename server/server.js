import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

const {
  PORT = 5000,
  NODE_ENV = 'development',
  CLIENT_URL = 'http://localhost:5173',
  SMTP_HOST = 'smtp.gmail.com',
  SMTP_PORT = '465',
  SMTP_USER,
  SMTP_PASS,
  CONTACT_RECEIVER_EMAIL,
} = process.env;

const app = express();
if (NODE_ENV === 'production') app.set('trust proxy', 1);

app.use(helmet());
app.use(cors({ origin: CLIENT_URL.split(',').map((u) => u.trim()) }));
app.use(express.json({ limit: '10kb' }));

// Email transporter (only if credentials exist)
const emailReady = Boolean(SMTP_USER && SMTP_PASS && CONTACT_RECEIVER_EMAIL);
const transporter = emailReady
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null;

// Max 5 messages per visitor every 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { success: false, message: 'Too many messages. Please try again later.' },
});

const rules = [
  body('name').trim().isLength({ min: 2, max: 80 }).withMessage('Name must be 2 to 80 characters'),
  body('email').trim().isEmail().withMessage('Enter a valid email').isLength({ max: 120 }),
  body('service').trim().notEmpty().withMessage('Please select a service').isLength({ max: 100 }),
  body('budget').optional({ values: 'falsy' }).trim().isLength({ max: 100 }),
  body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be 10 to 2000 characters'),
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', emailConfigured: emailReady });
});

app.post('/api/contact', contactLimiter, rules, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    const { name, email, service, budget, message, website } = req.body;

    // Honeypot: a hidden field that only bots fill in
    if (website) return res.status(200).json({ success: true, message: 'Message sent' });

    const cleanService = service.replace(/[\r\n]+/g, ' ');
    const text =
      `Name: ${name}\nEmail: ${email}\nService: ${cleanService}\n` +
      `Budget: ${budget || 'Not specified'}\n\n${message}`;

    if (!transporter) {
      if (NODE_ENV === 'production') {
        return res.status(500).json({ success: false, message: 'Email service not configured' });
      }
      console.log('\n--- New contact message (email not configured) ---\n' + text + '\n---\n');
    } else {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${SMTP_USER}>`,
        to: CONTACT_RECEIVER_EMAIL,
        replyTo: email,
        subject: `[Portfolio] ${cleanService} enquiry from ${name.replace(/[\r\n]+/g, ' ')}`,
        text,
      });
    }

    res.status(201).json({ success: true, message: 'Thank you! Your message has been sent.' });
  } catch (err) {
    next(err);
  }
});

app.use((req, res) => res.status(404).json({ success: false, message: 'Route not found' }));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: status < 500 ? err.message : 'Could not send your message. Please try again later.',
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Could not start on port ${PORT}:`, err.message);
    process.exit(1);
  }
  console.log(`API running on http://localhost:${PORT}`);
  console.log(emailReady ? 'Email: configured' : 'Email: NOT configured (messages will print here)');
});