import React from 'react';
import Profile from '../components/Profile';
import ProjectSelection from '../components/ProjectSelection.tsx';
import {Project, projects} from '../projects/projects.ts';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";

const Home: React.FC = () => {
    return (
        <Container>
            <Profile />
            <Typography variant="h3" color="primary" sx={{ marginTop: "5rem", display: "flex", justifySelf: "center" }}>Projects</Typography>
            <Grid container direction="column" spacing={4} mt={2} mb={10}>
                {projects.map((project: Project, index: number) => (
                    <Grid key={index}>
                        <ProjectSelection project={project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
