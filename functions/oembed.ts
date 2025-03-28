export const onRequest: PagesFunction<Env> = async (context) => {
    const url = new URL(context.request.url);
    const paramValue = url.searchParams.get('url');
    console.log(paramValue);
    
    return new Response(JSON.stringify({
        version: "1.0",
        type: "video",
        provider_name: "insberr.com",
        provider_url: "https://insberr.com/",
        width: 425,
        height: 344,
        title: "PostView Title",
        author_name: "Insberr", 
        author_url: "https://insberr.com/",
        html: "<object width=\"425\" height=\"344\"></object>"
    }));
}