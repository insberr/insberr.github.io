import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router';
import { styled } from '@mui/system';

interface ProjectSectionProps {
    project: {
        id: string;
        title: string;
        image: string;
        description: string;
        details_md: string;
        codeLink: string;
    };
}

const BackgroundImage = styled(Box)({
    width: '100%',
    height: '350px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '15px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.9) 100%)',
    },
});

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
    return (
        <BackgroundImage style={{ backgroundImage: `url(${project.image})`, borderRadius: '15px', }}>
            <Box position="absolute" bottom={0} p={2} color="white" width="100%">
                <Typography variant="h5" color="primary">{project.title}</Typography>
                <Typography variant="body1">{project.description}</Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    component="a"
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1, mr: 1 }}
                >
                    View Code
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to={`/project/${project.id}`}
                    sx={{ mt: 1 }}
                >
                    More Info
                </Button>
            </Box>
        </BackgroundImage>
    );
};

export default ProjectSection;
