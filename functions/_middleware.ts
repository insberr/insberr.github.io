﻿export const onRequestOptions: PagesFunction = async () => {
    return new Response(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Max-Age": "86400",
        },
    });
}

export const onRequest: PagesFunction = async (context) => {
    const response = await context.next();
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Max-Age", "86400");
    return response;
}
