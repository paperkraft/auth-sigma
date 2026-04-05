import { Metadata } from "next";

export interface ProjectMetadata {
    id: string;
    type: string;
    name: string;
    description?: string;
    lastModified: string;
    nodeCount?: number;
    linkCount?: number;
}

export const DUMMY_PROJECTS: ProjectMetadata[] = [
    {
        id: "proj-1",
        type: "security",
        name: "Login Audit Log",
        description: "Review of recent login attempts and patterns",
        lastModified: '1/24/2026',
    },
    {
        id: "proj-2",
        type: "governance",
        name: "Role Compliance Registry",
        description: "List of all user roles and their respective permissions",
        lastModified: '1/24/2026',
    },
    {
        id: "proj-3",
        type: "security",
        name: "Credential Rotation Log",
        description: "History of password and key rotations",
        lastModified: '1/24/2026',
    },
];


export async function getProjectMetadata(
    params: Promise<{ projectId: string }>,
    type: string
): Promise<Metadata> {
    const { projectId } = await params;

    const project = DUMMY_PROJECTS.find(
        (p) => p.type === type && p.id === projectId
    );

    return project
        ? { title: project.name, description: project.description }
        : { title: "Project Not Found" };
}
