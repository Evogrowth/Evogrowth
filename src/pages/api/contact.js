import { validateContactForm } from "../../middleware/emailValidators.js";
import { sendContactEmail } from "../../controllers/emailController.js"

export const POST = validateContactForm(handler);

async function handler(context){
    return await sendContactEmail(context.locals.body.email, context.locals.body.message);
}