import React from "react";
import { useState } from "react";

import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import MarkdownRenderer from "../components/MarkdownRenderer.tsx";
import Box from "@mui/material/Box";
import {PostsAPIURL, PostsAssetsURL} from "./Posts.tsx";
import MarkdownEditor from "../components/MarkdownEditor.tsx";
import {TextField} from "@mui/material";
import {handlePaste} from "../components/pasteHandler.ts";


const MakePost: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [relatedProject, setRelatedProject] = useState<string>("");
    
    const [summaryImage, setSummaryImage] = useState<string | null>("");
    const [coverImage, setCoverImage] = useState<string | null>("");
    
    const [markdown, setMarkdown] = useState<string>("");
    const [summary, setSummary] = useState<string>("");

    async function createPost() {
        const post = {
            title: title,
            coverImage: coverImage,
            contents: markdown,

            summary: summary,
            summaryImage: summaryImage,

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
    
    return <Box sx={{ marginTop: "2rem", padding: "1rem" }}>
        <Button variant="contained" onClick={async () => {
            await createPost();
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
                <TextField
                    id="post-related-project"
                    label="Related Project"
                    variant="standard"
                    onChange={(event) => {
                        setRelatedProject(event.target.value);
                    }}
                />

                <TextField
                    id="post-cover-image"
                    label="Cover Image URL"
                    variant="standard"
                    onChange={(event) => {
                        setCoverImage(event.target.value);
                    }}
                    onPaste={(event) => {
                        handlePaste(event as never as ClipboardEvent).then(fileName => {
                            if (!fileName) return;
                            const imageURL = `${PostsAssetsURL}/${fileName}`;
                            (event.target as any).value = imageURL;
                            setCoverImage(imageURL);
                        })
                    }}
                />

                <TextField
                    id="post-summary-image"
                    label="Summary Image URL"
                    variant="standard"
                    onChange={(event) => {
                        setSummaryImage(event.target.value);
                    }}
                    onPaste={(event) => {
                        handlePaste(event as never as ClipboardEvent).then(fileName => {
                            if (!fileName) return;
                            const imageURL = `${PostsAssetsURL}/${fileName}`;
                            (event.target as any).value = imageURL;
                            setSummaryImage(imageURL);
                        })
                    }}
                />
                
                <MarkdownEditor onUpdate={setSummary} />
                <MarkdownEditor onUpdate={setMarkdown} />
            </Grid>
            <Grid size="grow">
                <MarkdownRenderer markdown={markdown} />
            </Grid>
        </Grid>
    </Box>
};

export default MakePost;
