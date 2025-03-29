import React from 'react';
import {Link, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faTwitch,
    faItchIo,
    faLinux,
    faDiscord,
    faYoutube,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const LinksList = [
    {
        name: "GitHub",
        description: "Here lives all my code",
        url: "https://github.com/insberr",
        icon: faGithub,
        color: "#ffffff"
    },
    {
        name: "Discord",
        description: "My discord server",
        url: "https://discord.gg/gRMbZyU",
        icon: faDiscord,
        color: "#a48ff2"
    },
    {
        name: "Twitch",
        description: "I mainly do my programming streams here",
        url: "https://twitch.tv/insberr",
        icon: faTwitch,
        color: "#c989ff"
    },
    {
        name: "Programming YouTube",
        description: "Programming stream Twitch VODs and dev-log videos",
        url: "https://youtube.com/@insberr",
        icon: faYoutube,
        color: "#fc9f9f"
    },
    {
        name: "Gaming YouTube",
        description: "Mostly MineCraft videos and streams",
        url: "https://youtube.com/@insberr.gaming",
        icon: faYoutube,
        color: "#fc9f9f"
    },
    {
        name: "IRL YouTube",
        description: "Real life content such as my 'Stuck At Home' series",
        url: "https://youtube.com/@jonahmatteson",
        icon: faYoutube,
        color: "#fc9f9f"
    },
    {
        name: "Ko-fi",
        description: "'Buy me a coffee'",
        url: "https://ko-fi.com/insberr",
        icon: faLinux,
        color: "#fe9da1"
    },
    {
        name: "Itch",
        description: "If I ever publish any games, they will end up here first",
        url: "https://insberr.itch.io/",
        icon: faItchIo,
        color: "#ff8f8f"
    },
    {
        name: "Linkedin",
        description: "Professional business .. I am not very active here",
        url: "https://linkedin.com/in/jonahmatteson",
        icon: faLinkedin,
        color: "#ff8f8f"
    },
];

const Links: React.FC = () => {
    return (
        <List>
            { LinksList.map((link, index) => (
                <ListItemButton key={index} component={Link} href={link.url} target="_blank">
                    <ListItemIcon>
                        <FontAwesomeIcon icon={link.icon} color={link.color} size="lg" />
                    </ListItemIcon>
                    <ListItemText primary={link.name} secondary={link.description} />
                </ListItemButton>
            ))}
            
        </List>
    );
};

export default Links;
