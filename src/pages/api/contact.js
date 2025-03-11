import { enviarCorreo } from "../../services/nodemailerService.js"

export async function POST({ request }) {
    try {
        await enviarCorreo({
            to: request.body.email,
            html: `<div style="display: flex; justify-content: center; align-content: center; background-color: #373863; padding: 0 15px">` +
                //<img style="margin: 0 auto; width: 60px; background-color: white; padding: 2px 5px" src="${DOMAIN}/img/landingPage/argos/logo_argos.jpg" \>
                `</div>
                        <div style="padding-left: 25px">
                            <p>${request.body.message}</p>
                        </div>
                        <div style="background-color: #373863; width: 100%; height: 30px">
                        </div>`,
            subject: "Evogrowth - contact"
        })
        return new Response(null, {
            status: 200
        });

    }
    catch (error) {
        console.error("Error al enviar correo de contacto");
        console.error(error.message);
        return new Response(null, {
            status: 503,
            statusText: "Server error"
        })
    }

}
