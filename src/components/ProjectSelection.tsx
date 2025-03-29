import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router';
import { styled } from '@mui/system';
import {Project} from "../projects/projects.ts";

interface ProjectSectionProps {
    project: Project;
}

const BackgroundImage = styled(Box)({
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '15px'
    },
});

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
    return (
        <BackgroundImage
            sx={{
                height: { xs: '250px', md: '400px' },
            }}
            style={{ backgroundImage: `url(${project.background})`, borderRadius: '15px', }}
        >
            <Box position="absolute" bottom={0} p={2} color="white" width="100%"
                 sx={{
                     paddingTop: "3rem",
                     background: 'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.8) 100%)',
                     borderRadius: '0 0 14px 14px',
                 }}
            >
                <Typography variant="h4" color="primary">{project.name}</Typography>
                <Typography variant="body1">{project.description}</Typography>
                {
                    project.details_md &&
                        <Button
                            variant="contained"
                            color="primary"
                            component={RouterLink}
                            to={`/project/${project.id}`}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            More Info
                        </Button>
                }
                { project.links.map((link, index) => {
                    return <Button
                        key={index}
                        variant="contained"
                        color="primary"
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 1, mr: 1 }}
                    >
                        {link.name}
                    </Button>
                })}
            </Box>
        </BackgroundImage>
    );
};

export default ProjectSection;
