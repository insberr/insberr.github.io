import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {Link as RouterLink} from "react-router";
import {PostsAssetsURL} from "../pages/Posts.tsx";

const Profile: React.FC = () => {
    return (
        <Box textAlign="center" my={4}>
            <Avatar
                src={`${PostsAssetsURL}/profile/irl_avatar.jpeg`}
                alt="Profile Icon"
                sx={{width: 200, height: 200, margin: '0 auto'}}
            />
            <Typography variant="h3" mt={2}>Jonah Matteson</Typography>
            <Typography variant="h5">@insberr</Typography>
            <Box>
                <IconButton aria-label="github" href="https://github.com/insberr">
                    <FontAwesomeIcon icon={faGithub} />
                </IconButton>
                <IconButton aria-label="linkedin" href="https://linkedin.com/in/jonahmatteson">
                    <FontAwesomeIcon icon={faLinkedin} />
                </IconButton>
                <IconButton aria-label="discord server" href="https://discord.gg/gRMbZyU">
                    <FontAwesomeIcon icon={faDiscord} />
                </IconButton>
                <IconButton aria-label="dev youtube" href="https://youtube.com/@insberr">
                    <FontAwesomeIcon icon={faYoutube} />
                </IconButton>
                <IconButton aria-label="more links" component={RouterLink} to={'links'}>
                    <MoreHorizIcon />
                </IconButton>
            </Box>
            <Typography variant="h6" mt={2}>
                I am a developer and YouTuber. I have experience in developing websites, games, and other random little things.
                I hope to make code that will make life easier.
            </Typography>
        </Box>
    );
};

export default Profile;
