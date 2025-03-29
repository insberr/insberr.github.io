import React from 'react';
import { useParams } from 'react-router';
import gfm from 'remark-gfm';
import {Project, projects} from '../projects/projects.ts';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MarkdownRenderer from "../components/MarkdownRenderer.tsx";

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
        <Container sx={{ marginTop: "2rem" }}>
            <Typography variant="h3" color="primary">{project.name}</Typography>
            <MarkdownRenderer remarkPlugins={[gfm]} markdown={project.details_md} />
        </Container>
    );
};

export default ProjectDetail;
