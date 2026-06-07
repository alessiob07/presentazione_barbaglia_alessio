// src/routes/fsl/+page.js

export async function load() {
    const allFiles = import.meta.glob('$lib/fsl-content/*.md', { eager: true });
    
    const esperienze = Object.entries(allFiles).map(([path, file]) => {
        return {
            meta: file.metadata
        };
    });

    return { esperienze };
}