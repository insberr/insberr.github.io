
export const onRequest: PagesFunction<Env> = async (context) => {
    const listedPosts = await context.env.KV.list({ limit: 10 });
    
    const posts = []
    
    for await (const postKey of listedPosts.keys) {
        posts.push(
            JSON.parse( await context.env.KV.get(postKey.name) )
        );
    }
    
    return new Response(JSON.stringify(posts));
}
