import schedule_personalizer_md from './schedule-personalizer.md?raw';
import schedule_image from './schedule-personalizer.png';
import archea_md from './archea.md?raw';
import archea_image from './archea.png';

import.meta.env.BASE_URL;

export const projects = [
  {
    "id": "schedule-personalizer",
    "title": "Schedule Personalizer",
    "image": schedule_image,
    "description": "Schedule website I made for high school",
    "details_md": schedule_personalizer_md,
    "codeLink": "https://github.com/insberr/schedule-personalizer"
  },
  {
    "id": "archea",
    "title": "Archea",
    "image": archea_image,
    "description": "3D Falling Sand Simulation",
    details_md: archea_md,
    "codeLink": "https://github.com/insberr/archea"
  }
]
