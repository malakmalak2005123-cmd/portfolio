import fs from 'fs';
import path from 'path';

export function getProjectImages(id: string) {
    const projectDir = path.join(process.cwd(), 'public', 'images', 'projects', id, 'project');
    const adminDir = path.join(process.cwd(), 'public', 'images', 'projects', id, 'admin');

    const projectImages: string[] = [];
    const adminImages: string[] = [];

    try {
        if (fs.existsSync(projectDir)) {
            const files = fs.readdirSync(projectDir);
            // Custom sort for Windows naming: image, image copy, image copy 2, etc.
            files.sort((a, b) => {
                const getWeight = (name: string) => {
                    const base = name.split('.')[0];
                    if (base === 'image') return 0;
                    if (base === 'image copy') return 1;
                    const match = base.match(/^image copy (\d+)$/);
                    if (match) return parseInt(match[1]) + 1;
                    return 1000;
                };
                return getWeight(a) - getWeight(b);
            });

            files.forEach(file => {
                if (file.match(/\.(png|jpe?g|gif|webp|svg)$/i)) {
                    projectImages.push(`/images/projects/${id}/project/${file}`);
                }
            });
        }
    } catch (e) {
        console.error(`Error reading project dir for ${id}`, e);
    }

    try {
        if (fs.existsSync(adminDir)) {
            const files = fs.readdirSync(adminDir);
            files.sort((a, b) => {
                const getWeight = (name: string) => {
                    const base = name.split('.')[0];
                    if (base === 'image') return 0;
                    if (base === 'image copy') return 1;
                    const match = base.match(/^image copy (\d+)$/);
                    if (match) return parseInt(match[1]) + 1;
                    return 1000;
                };
                return getWeight(a) - getWeight(b);
            });

            files.forEach(file => {
                if (file.match(/\.(png|jpe?g|gif|webp|svg)$/i)) {
                    adminImages.push(`/images/projects/${id}/admin/${file}`);
                }
            });
        }
    } catch (e) {
        console.error(`Error reading admin dir for ${id}`, e);
    }

    return { projectImages, adminImages };
}
