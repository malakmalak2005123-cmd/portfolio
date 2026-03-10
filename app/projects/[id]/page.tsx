import { profileData } from "@/lib/data";
import { notFound } from "next/navigation";
import { getProjectImages } from "@/lib/get-project-images";
import ProjectDetailsClient from "@/components/ProjectDetailsClient";

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Find project by ID
    const project = profileData.projects.find((p) => (p as any).id === id);

    if (!project) {
        return notFound();
    }

    // Automatically discover images from the project folders
    const { projectImages, adminImages } = getProjectImages(id);

    return (
        <ProjectDetailsClient
            project={project}
            images={projectImages}
            adminImages={adminImages}
        />
    );
}
