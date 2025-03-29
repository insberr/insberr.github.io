import { randomUUID } from 'node:crypto';

type PostFromClient = {
    title: string;
    coverImage: string;
    contents: string;

    summary: string;
    summaryImage: string;

    relatedProject: string;
}

type Post = PostFromClient & {
    postId: string;
    postDate: Date | string;
    postEditDate: Date | string | null;
}

interface POP_POST_Request {
    action: string;
    post?: PostFromClient;
    postId: string;
}

interface Env {
    KV: KVNamespace;
    POSTS_MANAGE_USERNAME: string;
    POSTS_MANAGE_PASSWORD: string;
}

function generateErrorResponse(error: string, status: number) {
    return new Response(
        JSON.stringify({ error: error }),
        { status: status }
    );
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const auth = context.request.headers.get("Authorization");
    
    if (auth !== `${context.env.POSTS_MANAGE_USERNAME}@${context.env.POSTS_MANAGE_PASSWORD}`) {
        return new Response(
            JSON.stringify({ error: "Bad credentials!" }),
            { status: 401 }
        );
    }
    
    const requestJSON: POP_POST_Request = await context.request.json();
    
    switch (requestJSON.action) {
        case "create": {
            if (!requestJSON.post) {
                return generateErrorResponse("Unable to create post.", 400);
            }
            
            const newUUID = randomUUID();
            
            const post: Post = {
                ...requestJSON.post,
                postId: newUUID,
                postDate: new Date(),
                postEditDate: null,
            };
            
            await context.env.KV.put(newUUID, JSON.stringify(post));
            
            return new Response(JSON.stringify({ newPost: post }));
        }
        case "modify": {
            if (!requestJSON.postId || !requestJSON.post) {
                return generateErrorResponse("Unable to modify post.", 400);
            }
            
            const originalPost: Post = JSON.parse(await context.env.KV.get(requestJSON.postId));
            
            const newPost: Post = {
                ...originalPost,
                ...requestJSON.post,
                postEditDate: new Date(),
            };

            await context.env.KV.put(requestJSON.postId, JSON.stringify(newPost));
            
            return new Response(JSON.stringify({ newPost: newPost }));
        }
        case "delete": {
            if (!requestJSON.postId) {
                return generateErrorResponse("Unable to delete post.", 400);
            }
            
            await context.env.KV.delete(requestJSON.postId);
            
            return new Response(JSON.stringify({ message: 'Post deleted successfully.' }));
        }
        default: {
            return generateErrorResponse("Unable to perform action.", 400);
        }
    } 
}
