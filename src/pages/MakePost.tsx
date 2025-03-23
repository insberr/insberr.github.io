import React from "react";
import {useCreateBlockNote} from "@blocknote/react";
import {BlockNoteView} from "@blocknote/mantine";
import { useEffect, useState } from "react";
import {BlockNoteEditor} from "@blocknote/core";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import MarkdownRenderer from "../components/MarkdownRenderer.tsx";
import Box from "@mui/material/Box";


async function createPost(title: string,  contents: string, summary: string, relatedProject: string) {
    const post = {
        title: title,
        contents: contents,
        summary: summary,
        relatedProject: relatedProject
    }
    
    const response = await fetch("http://127.0.0.1:8788/posts/manage", {
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
    const [markdown, setMarkdown] = useState<string>("");
    
    const editor: BlockNoteEditor = useCreateBlockNote();

    const onChange = async () => {
        const markdown = await editor.blocksToMarkdownLossy(editor.document);
        setMarkdown(markdown);
    };

    useEffect(() => {
        onChange().then(_ => {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return <Box>
        <Button onClick={async () => {
            await createPost(
                "TODO Title",
                markdown,
                "TODO Shortened Markdown: " + markdown,
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
                <BlockNoteView editor={editor} onChange={onChange}/>
            </Grid>
            <Grid size="grow">
                <MarkdownRenderer markdown={markdown} />
            </Grid>
        </Grid>
    </Box>
};

export default MakePost;
