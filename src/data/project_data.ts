import {ProjectModel} from "../models/project";

export const project_data: ProjectModel[] = [
  {
    ProjectTitle: ' Portifolio',
    description: 'Website portifolio',
    year: 2024,
    role: 'Frontend',
    tag: 'Personal Project',
    linkList: {
      repository: 'https://github.com/gilcllys/portifolio',
    }

  },
  {
    ProjectTitle: 'Convolutional neural network (CNN) applied to the Reynolds experiment',
    description: 'It was my bachelor of chemical engineering final project',
    year: 2024,
    role: 'Computer vision',
    tag: 'Artificial intelligence',
    linkList: {
      repository: 'https://github.com/gilcllys/Reynolds-detection',
      demo: 'https://medium.com/p/eb7d1f1a3205',
      image: 'https://github.com/gilcllys/Reynolds-detection/blob/master/Dados/1/Turbulento_397.jpg?raw=true',
    }

  }
];
