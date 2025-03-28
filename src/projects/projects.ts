import schedule_personalizer_md from './schedule-personalizer.md?raw';
import archea_md from './archea.md?raw';
import {PostsAssetsURL} from "../pages/Posts.tsx";

import.meta.env.BASE_URL;

export const projects = [
  {
    "id": "schedule-personalizer",
    "title": "Schedule Personalizer",
    "image": `${PostsAssetsURL}/projects/schedule-personalizer.png`,
    "description": "Schedule website I made for high school",
    "details_md": schedule_personalizer_md,
    "codeLink": "https://github.com/insberr/schedule-personalizer"
  },
  {
    "id": "archea",
    "title": "Archea",
    "image": `${PostsAssetsURL}/projects/archea.png`,
    "description": "3D Falling Sand Simulation",
    details_md: archea_md,
    "codeLink": "https://github.com/insberr/archea"
  }
]
