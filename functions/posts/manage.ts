// @ts-ignore
import crypto from 'node:crypto';

type Post_From_Client = {
    title: string;
    contents: string;
    summary: string;
    relatedProject: string;
}

type Post = Post_From_Client & {
    postId: string;
    postDate: Date;
    postEditDate: Date | null;
}

interface POP_Request {
    action: string;
    post?: Post_From_Client;
    postId?: string;
}

interface Env extends Cloudflare.Env {
    POSTS_MANAGE_USERNAME: string;
    POSTS_MANAGE_PASSWORD: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const auth = context.request.headers.get("Authorization");
    
    if (auth !== `${context.env.POSTS_MANAGE_USERNAME}@${context.env.POSTS_MANAGE_PASSWORD}`) {
        return new Response(
            JSON.stringify({ error: "Bad credentials!" }),
            { status: 401 }
        );
    }
    
    const requestJSON: POP_Request = await context.request.json()
    
    switch (requestJSON.action) {
        case "create": {
            if (!requestJSON.post) {
                return new Response(
                    JSON.stringify({ error: "No post details provided..."}),
                    { status: 400 }
                )
            }
            
            const uuid = crypto.randomUUID();
            
            const post: Post = {
                postId: uuid,
                postDate: new Date(),
                postEditDate: null,
                ...requestJSON.post
            }
            
            await context.env.KV.put(uuid, JSON.stringify(post));
            
            return new Response(JSON.stringify({ newPost: post }));
        }
        case "modify": {
            if (!requestJSON.postId) {
                return new Response(
                    JSON.stringify({ error: "No postId provided..."}),
                    { status: 400 }
                )
            }
            
            if (!requestJSON.post) {
                return new Response(
                    JSON.stringify({ error: "No post details provided..."}),
                    { status: 400 }
                )
            }

            const originalPost: Post = JSON.parse(await context.env.KV.get(requestJSON.postId));
            
            const newPost = {
                ...originalPost,
                postEditDate: new Date(),
                ...requestJSON.post
            }
            
            await context.env.KV.put(requestJSON.postId, JSON.stringify(newPost));
            
            return new Response(JSON.stringify({ newPost: newPost }));
        }
        case "delete": {
            if (!requestJSON.postId) {
                return new Response(
                    JSON.stringify({ error: "No postId provided..."}),
                    { status: 400 }
                )
            }
            
            await context.env.KV.delete(requestJSON.postId);
            
            return new Response(JSON.stringify({ message: "Successfully deleted post" }));
        }
        case "none": {
            // This is purely to make TS not complain about unreachable code
            break;
        }
        default: {
            return new Response(
                JSON.stringify({ error: `No action ${requestJSON.action} can be done on posts...` }),
                { status: 400 }
            )
        }
    }

    return new Response(
        JSON.stringify({ error: "How did we get here?" }),
        { status: 500 }
    );
};