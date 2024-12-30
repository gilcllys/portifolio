import {LinkModel} from "./links";

export class ProjectModel {
    ProjectTitle: string;
    description: string;
    year: number;
    role: string;
    tag: string;
    linkList: LinkModel;

    constructor(
        ProjectTitle: string,
        description: string,
        year: number,
        role: string,
        tag: string,
        linkList: LinkModel,

    ) {
        this.ProjectTitle = ProjectTitle;
        this.description = description;
        this.year = year;
        this.role = role;
        this.tag = tag;
        this.linkList = linkList
    }
}
