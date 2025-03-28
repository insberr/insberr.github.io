import { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { EditorState } from "@codemirror/state";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { languages } from "@codemirror/language-data";
import { tags as t } from "@lezer/highlight";
import pasteHandler from "./pasteHandler.ts";

// Define a Markdown-like highlight style
const markdownHighlightStyle = HighlightStyle.define([
    { tag: t.strong, fontWeight: "bold", color: "#d4d4d4" }, // Bold
    { tag: t.emphasis, fontStyle: "italic", color: "#d4d4d4" }, // Italic
    
    { tag: t.heading1, fontWeight: "bold", fontSize: "2.0em", color: "#d4d4d4" }, // Headings
    { tag: t.heading2, fontWeight: "bold", fontSize: "1.8em", color: "#d4d4d4" }, // Headings
    { tag: t.heading3, fontWeight: "bold", fontSize: "1.6em", color: "#d4d4d4" }, // Headings
    { tag: t.heading4, fontWeight: "bold", fontSize: "1.4em", color: "#d4d4d4" }, // Headings
    
    { tag: t.url, color: "#d19a66", textDecoration: "underline" }, // Links
    { tag: t.list, color: "#d4d4d4" }, // Lists
    { tag: t.quote, color: "#6A9955", fontStyle: "italic" }, // Blockquotes
]);

const myTheme = EditorView.theme({
    ".cm-activeLine": {
        backgroundColor: "transparent",
    }
}, {dark: true})

interface MarkdownEditorProps {
    onUpdate: (value: string) => void;
}

const MarkdownEditor = ({ onUpdate }: MarkdownEditorProps) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [editorView, setEditorView] = useState<EditorView | null>(null);

    useEffect(() => {
        if (!editorRef.current) return;

        // Define updateListener
        const updateListener = EditorView.updateListener.of((update) => {
            if (update.docChanged) {
                onUpdate(update.view.state.doc.toString());
            }
        });
        
        const startState = EditorState.create({
            doc: "",
            extensions: [
                basicSetup,
                myTheme,
                markdown({ codeLanguages: languages }),
                syntaxHighlighting(markdownHighlightStyle),
                updateListener,
                pasteHandler
            ],
        });

        const view = new EditorView({
            state: startState,
            parent: editorRef.current,
        });

        setEditorView(view);

        return () => view.destroy();
    }, []);

    return <div ref={editorRef} style={{ padding: "10px" }} />;
};

export default MarkdownEditor;
