import { ProjectModel } from "../models/project";

export const project_data: ProjectModel[] = [
    {
        ProjectTitle: ' Portifolio',
        description: 'Website portifolio',
        year: 2024,
        role: 'Frontend',
        tag: 'Personal Project',
        linkList: {
            'github': 'https://github.com/gilcllys/portifolio',
            'live-demo': '#',
            'image': '#'
        }

    },
    {
        ProjectTitle: 'Convolutional neural network (CNN) applied to the Reynolds experiment',
        description: 'It was my  bachelor of chemical engineering final project',
        year: 2024,
        role: 'Computer vision',
        tag: 'Artificial intelligence',
        linkList: {
            'github': 'https://github.com/gilcllys/Reynolds-detection',
            'live-demo': 'https://medium.com/p/eb7d1f1a3205',
            'image': 'https://www.youtube.com/watch?v=eiGBCKOaNA0&t=15s'
        }

    }
];