import React from 'react';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { projects } from '../projects/projects.ts';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    details_md: string;
    codeLink: string;
}

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p: Project) => p.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    // Import the markdown file
    // const [content, setContent] = useState('No details available for this project');
    // import('../projects/' + project.id + '.md').then((res) => {
    //     setContent(res.default);
    // }).catch((err: Error) => {
    //     console.log('Error loading project details: ' + err);
    // });

    return (
        <Container>
            <Typography variant="h3" color="primary">{project.title}</Typography>
            <ReactMarkdown remarkPlugins={[gfm]}>{project.details_md}</ReactMarkdown>
        </Container>
    );
};

export default ProjectDetail;
