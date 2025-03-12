export function validateContactForm(handler) {
    return async (context) => {
        const { request } = context;
        let body = {};

        if (request.headers.get("content-type")?.includes("application/json")) {
            body = await request.json().catch(() => ({}));
        } else if (request.headers.get("content-type")?.includes("application/x-www-form-urlencoded") || request.headers.get("content-type")?.includes("multipart/form-data")) {
            const formData = await request.formData();
            body = Object.fromEntries(formData);
        }

        //body.address is a honeypot
        if(!body || body.address || !body.email || !body.message){
            return new Response(null, {
                status: 503
            });
        }

        //TODO: Validate email and message data.

        //En el middleware, se deben guardar los datos del request en context.locals, para poder utilizarlos en el controller u otros lados.
        context.locals.body = body;
        return handler(context);
    }
};