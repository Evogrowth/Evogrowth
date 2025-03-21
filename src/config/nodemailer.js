import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: import.meta.env.EMAIL_HOST,
    port: import.meta.env.EMAIL_PORT,
    secure: import.meta.env.EMAIL_SECURE, // true for 465, false for other ports
    auth: {
      user: import.meta.env.EMAIL_AUTH_USER,
      pass: import.meta.env.EMAIL_AUTH_PASSWORD,
    }
});