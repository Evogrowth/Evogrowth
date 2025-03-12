import { sendEmailAsync } from "../services/nodemailerService.js"
import { getSecret } from "astro:env/server";

export async function sendContactEmail(email, message){
    try {
        await sendEmail(email, message, "Evogrowth - contact")
        return new Response(null, {
            status: 200
        });
    }
    catch (error) {
        console.error("Error at nodemailerService.sendContactEmail: Error sending contact email");
        console.error(error.message);
        return new Response(null, {
            status: 500,
        })
    }
}

async function sendEmail(to, message, subject){ 
    await sendEmailAsync({
        to,
        html: `<div style="display: flex; justify-content: center; align-content: center; background-color: #373863; padding: 0 15px">` +
        //<img style="margin: 0 auto; width: 60px; background-color: white; padding: 2px 5px" src="${DOMAIN}/img/landingPage/argos/logo_argos.jpg" \>
        `</div>
                <div style="padding-left: 25px">
                    <p>${message}</p>
                </div>
                <div style="background-color: #373863; width: 100%; height: 30px">
                </div>`,
        subject
    })
}