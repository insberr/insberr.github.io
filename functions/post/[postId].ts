export const onRequestGet: PagesFunction<Env> = async (context) => {
    context.passThroughOnException();
    
    const postId = context.params.postId;
    
    if (postId === undefined || postId === null || typeof postId !== 'string') {
        console.log('No postId provided, or not a string', postId);
        // No post id or it isn't a string, nothing to do
        return await context.next();
    }
    
    const post = JSON.parse(await context.env.KV.get(postId));
    
    const assetResponse = await context.env.ASSETS.fetch(context.request.url);
    let html = await assetResponse.text();
    
    const htmlMeta = `
\t<!-- replace-post-meta-start -->
\t<meta name="author" content="Jonah Matteson | @insberr" />
\t<meta name="title" content="${post.title}" />
\t<meta name="description" content="${post.summary}" />
\t<meta name="image" content="/profile/irl_avatar.jpeg" />
\t<meta name="theme-color" content="#222222" />
\t<!-- replace-post-meta-end -->
`;
    
    html = html.replace(
        /<!-- replace-post-meta-start -->(.|\n|\t|\r)+<!-- replace-post-meta-end -->/g,
        htmlMeta
    );
    
    return new Response(html, assetResponse);
}