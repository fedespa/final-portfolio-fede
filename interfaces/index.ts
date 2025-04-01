export interface WebsiteContent {
    title: Title;
    description: string;
    projects: ProjectsSection;
    tech: TechSection;
}

export interface Title {
    text1: string;
    text2: string;
}

export interface ProjectsSection {
    title: string;
    description: string;
    items: ProjectItem[];
    button: string;
}

export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string
}

export interface TechSection {
    title: string;
    description: string;
    technologies: TechItem[];
}

export interface TechItem {
    name: string;
    icon: string;
    description: string;
}
