import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Card, CardActions, CardContent} from "@mui/material";
import {Link as RouterLink} from "react-router";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MarkdownRenderer from "../components/MarkdownRenderer.tsx";


export type Post = {
    postId: string;
    postDate: Date;
    postEditDate: Date | null;

    title: string;
    contents: string;
    summary: string;
    relatedProject: string;
}

// export const PostsAPIURL = "http://127.0.0.1:8788";
export const PostsAPIURL = "https://insberr.com";

const PostSummary = ({ node, inline, className, children, ...props }: any) => {
    const post: Post = props.post;
    
    return <Card variant="outlined">
        <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2">
                <MarkdownRenderer markdown={post.contents.slice(0, 100) + "..."} />
                
            </Typography>
            
        </CardContent>
        <CardActions>
            <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to={`/post/${post.postId}`}
            >
                View Post
            </Button>
        </CardActions>
    </Card>
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[] | null>(null);
    
    const onChange = async () => {
        // http://127.0.0.1:8788
        const response = await fetch(PostsAPIURL + '/posts/list');
        const posts: Post[] = await response.json();
        setPosts(posts);
    };

    useEffect(() => {
        onChange().then(_ => {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    if (posts === null) {
        return <div>Loading...</div>;
    }
    
    return <Box>
        <Typography variant="h4">Last 10 most recent posts</Typography>
        {
            posts.map((post, index) => {
                return <PostSummary key={index} post={post} />;
            })
        }
    </Box>
}

export default Posts;
