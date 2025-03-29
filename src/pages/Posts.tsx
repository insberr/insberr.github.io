import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Card, CardActionArea, CardContent, CardMedia, Chip} from "@mui/material";
import {useNavigate} from "react-router";
import Typography from "@mui/material/Typography";
import MarkdownRenderer from "../components/MarkdownRenderer.tsx";


export type Post = {
    postId: string;
    postDate: Date;
    postEditDate: Date | null;

    title: string;
    coverImage: string;
    contents: string;
    
    summary: string;
    summaryImage: string;
    
    relatedProject: string;
}

export const PostsAssetsURL = "https://assets.insberr.com";

// export const PostsAPIURL = "http://127.0.0.1:8788";
export const PostsAPIURL = window.location.origin;

const PostSummaryCard = ({ post }: { post: Post }) => {
    const routerNavigate = useNavigate();
    
    return <Card sx={{ marginBottom: "3rem", width: 900, borderRadius: 3 }} raised>
        <CardActionArea onClick={() => {
            routerNavigate(`/post/${post.postId}`)
        }}>
            <Box sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 350, height: "auto", alignSelf: "center", margin: "1rem" }}
                    image={post.summaryImage}
                    alt="Blog post summary image"
                />
                <CardContent>
                    <Typography component="div" variant="h5">
                        {post.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {new Date(post.postDate).toDateString()}
                    </Typography>
                    <Chip label={post.relatedProject} color="primary" size="small" />
                    <Typography
                        variant="body1"
                        component="div"
                    >
                        <MarkdownRenderer markdown={post.summary} />
                    </Typography>
                </CardContent>
            </Box>
        </CardActionArea>
    </Card>;
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
    
    return <Box sx={{
        marginTop: '1rem',
        padding: '1rem',
    }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>Recent Posts</Typography>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "4rem", padding: '0 1rem' }}>
            {
                posts.map((post, index) => {
                    return <PostSummaryCard key={index} post={post} />;
                })
            }
        </Box>
    </Box>
}

export default Posts;
