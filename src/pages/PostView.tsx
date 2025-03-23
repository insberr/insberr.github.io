import Typography from "@mui/material/Typography";
import {useParams} from "react-router";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {Post, PostsAPIURL} from "./Posts.tsx";
import MarkdownRenderer from "../components/MarkdownRenderer.tsx";


const PostView = () => {
    const { postId } = useParams<{ postId: string }>();

    const [post, setPost] = useState<Post | null>(null);

    const onChange = async () => {
        const res = await fetch(PostsAPIURL + '/posts/get', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ postId: postId }),
        });
        
        const post: Post = await res.json();
        
        console.log(post);
        
        setPost(post);
    };

    useEffect(() => {
        onChange().then(_ => {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    if (post === null) {
        return <div>Loading...</div>;
    }
    
    return <Box sx={{ padding: '2rem' }}>
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
            Posted {new Date(post.postDate).toDateString()}
        </Typography>
        {
            post.postEditDate !== null &&
                <Typography variant="subtitle2" color="textSecondary">
                    Edited {new Date(post.postEditDate).toDateString()}
                </Typography>
        }
        <MarkdownRenderer markdown={post.contents} />
    </Box>
}

export default PostView;
