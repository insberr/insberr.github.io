import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Profile: React.FC = () => {
    return (
        <Box textAlign="center" my={4}>
            <Avatar
                src="/assets/insberr_avatar.png"
                alt="Profile Icon"
                sx={{width: 100, height: 100, margin: '0 auto'}}
            />
            <Typography variant="h4" mt={2}>Jonah Matteson</Typography>
            <Typography variant="subtitle1">@insberr</Typography>
            <Box>
                <IconButton aria-label="github" href="https://github.com/insberr">
                    <FontAwesomeIcon icon={faGithub} />
                </IconButton>
                <IconButton aria-label="linkedin" href="https://linkedin.com/in/jonahmatteson">
                    <FontAwesomeIcon icon={faLinkedin} />
                </IconButton>
                <IconButton aria-label="discord server" href="https://github.com/insberr">
                    <FontAwesomeIcon icon={faDiscord} />
                </IconButton>
                <IconButton aria-label="dev youtube" href="https://youtube.com/@insberr">
                    <FontAwesomeIcon icon={faYoutube} />
                </IconButton>
            </Box>
            <Typography variant="body1" mt={2}>
                I am a developer and YouTuber. I have experience in developing websites, games, and other random little things.
                I hope to make code that will make life easier.
            </Typography>
        </Box>
    );
};

export default Profile;
