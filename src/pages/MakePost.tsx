import React from "react";
import { useState } from "react";

import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import MarkdownRenderer from "../components/MarkdownRenderer.tsx";
import Box from "@mui/material/Box";
import {PostsAPIURL} from "./Posts.tsx";
import MarkdownEditor from "../components/MarkdownEditor.tsx";
import {TextField} from "@mui/material";


async function createPost(title: string,  contents: string, summary: string, relatedProject: string) {
    const post = {
        title: title,
        contents: contents,
        summary: summary,
        relatedProject: relatedProject
    }
    
    const response = await fetch(PostsAPIURL + "/posts/manage", {
        method: "POST",
        headers: {
            'Authorization': localStorage.getItem("personal-website-pose-credentials") || "user@password",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: "create", post: post })
    });
    
    const responseJSON = await response.json();
    
    console.log(responseJSON);
    
    return responseJSON;
}

const MakePost: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [markdown, setMarkdown] = useState<string>("");
    
    return <Box sx={{ marginTop: "2rem", padding: "1rem" }}>
        <Button onClick={async () => {
            await createPost(
                title,
                markdown,
                // TODO: Find a better way to do the summary
                markdown.slice(0, 100),
                "TODO Related Project"
            );
        }}>Post</Button>
        
        <Grid container spacing={2} direction="row"
            sx={{
                justifyContent: "center",
                alignItems: "flex-start",
            }}
        >
            <Grid size="grow">
                <TextField
                    id="post-title"
                    label="Post Title"
                    variant="standard"
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <MarkdownEditor onUpdate={setMarkdown} />
            </Grid>
            <Grid size="grow">
                <MarkdownRenderer markdown={markdown} />
            </Grid>
        </Grid>
    </Box>
};

export default MakePost;
