import React from 'react';
import Profile from '../components/Profile';
import ProjectSelection from '../components/ProjectSelection.tsx';
import { projects } from '../projects/projects.ts';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    details_md: string;
    codeLink: string;
}

const Home: React.FC = () => {
    return (
        <Container>
            <Profile />
            <Grid container direction="column" spacing={4} mt={2} mb={10}>
                {projects.map((project: Project, index: number) => (
                    <Grid item key={index}>
                        <ProjectSelection project={project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
