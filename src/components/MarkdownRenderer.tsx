import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {Link} from "@mui/material";

// Obtained from https://hannadrehman.com/blog/enhancing-your-react-markdown-experience-with-syntax-highlighting
const CodeBlock = ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
        <SyntaxHighlighter style={materialDark} PreTag="div" language={match[1]} {...props}>
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
}

const MarkdownRenderer = ({ node, inline, className, children, ...props }: any) => {
    return <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[gfm]}
        components={{ code: CodeBlock, a: Link }}
    >
        {props.markdown}
    </ReactMarkdown>
}

export default MarkdownRenderer;
