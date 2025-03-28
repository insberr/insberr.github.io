interface Env {
    POSTS_ASSETS: R2Bucket;
    POSTS_MANAGE_USERNAME: string;
    POSTS_MANAGE_PASSWORD: string;
}

export const onRequestPut: PagesFunction<Env> = async (context) => {
    const auth = context.request.headers.get("Authorization");

    if (auth !== `${context.env.POSTS_MANAGE_USERNAME}@${context.env.POSTS_MANAGE_PASSWORD}`) {
        return new Response(
            JSON.stringify({ error: "Bad credentials!" }),
            { status: 401 }
        );
    }

    const url = new URL(context.request.url);
    const assetName = url.searchParams.get('name');
    
    const uploadResponse = await context.env.POSTS_ASSETS.put(assetName, context.request.body);
    
    return new Response(JSON.stringify({ message: "Success" }));
}
