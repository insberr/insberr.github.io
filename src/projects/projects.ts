import archea_md from './archea.md?raw';
import {PostsAssetsURL} from "../pages/Posts.tsx";

import.meta.env.BASE_URL;

export type Project = {
    id: string;
    name: string;
    background: string;
    description: string;

    details_md: string | null;

    links: {
        name: string;
        url: string;
    }[];
}

export const projects: Project[] = [
    {
        id: "schedule-personalizer",
        name: "Schedule Personalizer",
        background: `${PostsAssetsURL}/projects/schedule-personalizer.png`,
        description: "My high school made the most confusing schedules possible, so I created a website to help make the schedules less confusing.",
        details_md: null,
        links: [
            { name: "Source Code", url: "https://github.com/insberr/schedule-personalizer" }
        ]
    },
    {
        id: "archea",
        name: "Archea",
        background: `${PostsAssetsURL}/projects/archea.png`,
        description: "3D Falling Sand Simulation",
        details_md: archea_md,
        links: [
            { name: "Source Code", url: "https://github.com/insberr/archea" },
            // { name: "Itch.io Page", url: "https://github.com/insberr/archea" }
        ]
    },
    // {
    //     id: "dm-style-email",
    //     name: "Direct Message Style Email",
    //     background: `${PostsAssetsURL}/projects/dm-style-email.png`,
    //     description: "some description about the project",
    //     details_md: null,
    //     links: [
    //         { name: "Source Code", url: "https://github.com/Wild-Llama-Capital/dm-style-email" },
    //         { name: "Demo", url: "https://dmemail.insberr.com/" },
    //     ]
    // },
]
