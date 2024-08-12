export class ProjectModel {
    ProjectTitle: string;
    description: string;
    year: number;
    role: string;
    tag: string;
    linkList: object;

    constructor(
        ProjectTitle: string,
        description: string,
        year: number,
        role: string,
        tag: string,
        linkList: object,

    ) {
        this.ProjectTitle = ProjectTitle;
        this.description = description;
        this.year = year;
        this.role = role;
        this.tag = tag;
        this.linkList = linkList
    }
}