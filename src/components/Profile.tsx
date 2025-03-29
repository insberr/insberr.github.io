import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {PostsAssetsURL} from "../pages/Posts.tsx";
import {LinksList} from "../pages/Links.tsx";

const Profile: React.FC = () => {
    return (
        <Box textAlign="center" my={4}>
            <Avatar
                src={`${PostsAssetsURL}/profile/irl_avatar.jpeg`}
                alt="Profile Icon"
                sx={{width: 300, height: 300, margin: '0 auto'}}
            />
            <Typography variant="h3" mt={2}>Jonah Matteson</Typography>
            <Typography variant="h5">@insberr</Typography>
            <Box>
                { LinksList.slice(0, 4).map((item, index) => (
                    <IconButton aria-label={item.name} href={item.url} target="_blank" key={index}>
                        <FontAwesomeIcon icon={item.icon} />
                    </IconButton>
                ))}
            </Box>
            <Typography variant="h6" mt={2}>
                I am a developer and YouTuber. I have experience in developing websites, games, and other random little things.
                I hope to make code that will make life easier.
            </Typography>
        </Box>
    );
};

export default Profile;
