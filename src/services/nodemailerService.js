import { transporter } from "../config/nodemailer"

export const sendEmailAsync = async ({ to, html, subject }) => {
    await transporter.sendMail({
        from: import.meta.env.EMAIL_NO_REPLY,
        to,
        replyTo: import.meta.env.EMAIL_NO_REPLY,
        subject,
        html,
    });
}