
interface POP_Get_Request {
    postId?: string,
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const requestJSON: POP_Get_Request = await context.request.json();
    
    const post = await context.env.KV.get(requestJSON.postId);

    return new Response(post);
}