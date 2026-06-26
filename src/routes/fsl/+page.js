// src/routes/fsl/+page.js

export async function load() {
    const allFiles = import.meta.glob('$lib/esperienze-content/*.md', { eager: true });
    
    const esperienze = Object.entries(allFiles).map(([path, file]) => {
        return {
            id: path.split('/').pop().replace('.md', ''),
            meta: file.metadata
        };
    });

    return { esperienze, titolo: "Esperienze di Formazione scuola lavoro" };
}